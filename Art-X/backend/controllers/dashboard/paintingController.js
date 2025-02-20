const formidable = require("formidable");
const { responseReturn } = require("../../utiles/response");
const cloudinary = require("cloudinary").v2;
const paintingModel = require("../../models/paintingModel");

class paintingController {
  add_painting = async (req, res) => {
    // console.log("painting ok");
    const { id } = req;
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
        await paintingModel.create({
          sellerId: id,
          name,
          slug,
          shopName,
          category: category.trim(),
          description: description.trim(),
          stock: parseInt(stock),
          price: parseInt(price),
          discount: parseInt(discount),
          images: allImageUrl,
          type: type.trim(),
        });

        responseReturn(res, 201, { message: "Painting Added Successfully" });
      } catch (error) {
        responseReturn(res, 500, { error: error.message });
      }
    });
  };

  // End Method
}

module.exports = new paintingController();
