const formidable = require("formidable");
const { responseReturn } = require("../../utiles/response");
const cloudinary = require("cloudinary").v2;

class paintingController {
  add_painting = async (req, res) => {
    // console.log("painting ok");
    const form = formidable({ multiples: true });

    form.parse(req, async (err, field, files) => {
      //   console.log(files.images[0]);
      //   console.log(field);
      let {
        name,
        category,
        description,
        stock,
        price,
        discount,
        shopName,
        type,
      } = field;

      const { images } = files;
      name = name.trim();
      const slug = name.split(" ").join("-");

      cloudinary.config({
        cloud_name: process.env.cloud_name,
        api_key: process.env.api_key,
        api_secret: process.env.api_secret,
        secure: true,
      });

      try {
        let allImageUrl = [];
        for (let i = 0; i < images.length; i++) {
          const result = await cloudinary.uploader.upload(images[i].filepath, {
            folder: "paintings",
          });
          allImageUrl = [...allImageUrl, result.url];
        }
        await paintingModel.create({});
      } catch (error) {
        console.log(error);
      }
    });
  };

  // End Method
}

module.exports = new paintingController();
