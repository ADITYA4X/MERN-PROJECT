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

  paintings_get = async (req, res) => {
    // console.log(req.query);
    // console.log(req.id);

    const { page, searchValue, perPage } = req.query;
    const { id } = req;

    const skipPage = parseInt(perPage) * (parseInt(page) - 1);

    try {
      if (searchValue) {
        const paintings = await paintingModel
          .find({
            $text: { $search: searchValue },
            sellerId: id,
          })
          .skip(skipPage)
          .limit(perPage)
          .sort({ createdAt: -1 });
        const totalPainting = await paintingModel
          .find({
            $text: { $search: searchValue },
            sellerId: id,
          })
          .countDocuments();
        responseReturn(res, 200, { paintings, totalPainting });
      } else {
        const paintings = await paintingModel
          .find({ sellerId: id })
          .skip(skipPage)
          .limit(perPage)
          .sort({ createdAt: -1 });
        const totalPainting = await paintingModel
          .find({ sellerId: id })
          .countDocuments();
        responseReturn(res, 200, { paintings, totalPainting });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // End Method

  painting_get = async (req, res) => {
    const { paintingId } = req.params;
    try {
      const painting = await paintingModel.findById(paintingId);
      responseReturn(res, 200, { painting });
    } catch (error) {
      console.log(error.message);
    }
  };
  // End Method

  painting_update = async (req, res) => {
    let { name, description, stock, price, discount, type, paintingId } =
      req.body;
    name = name.trim();
    const slug = name.split(" ").join("-");

    try {
      await paintingModel.findByIdAndUpdate(paintingId, {
        name,
        description,
        stock,
        price,
        discount,
        type,
        paintingId,
        slug,
      });
      const painting = await paintingModel.findById(paintingId);
      responseReturn(res, 200, {
        painting,
        message: "Painting Updated Successfully",
      });
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };

  // End Method

  painting_image_update = async (req, res) => {
    // console.log("Received request for painting image update");
    // console.log(req.headers);
    // console.log(req.url);
    const form = formidable({ multiples: true });
    // console.log(form);

    form.parse(req, async (err, field, files) => {
      // console.log(field);
      // console.log(files);
      const { oldImage, paintingId } = field;
      const { newImage } = files;

      if (err) {
        responseReturn(res, 400, { error: err.message });
      } else {
        try {
          cloudinary.config({
            cloud_name: process.env.cloud_name,
            api_key: process.env.api_key,
            api_secret: process.env.api_secret,
            secure: true,
          });

          const result = await cloudinary.uploader.upload(newImage.filepath, {
            folder: "paintings",
          });

          // console.log(result);

          if (result) {
            let { images } = await paintingModel.findById(paintingId);
            // console.log(images);
            const index = images.findIndex((img) => img === oldImage);
            images[index] = result.url;
            await paintingModel.findByIdAndUpdate(paintingId, { images });

            const painting = await paintingModel.findById(paintingId);
            responseReturn(res, 200, {
              painting,
              message: "Painting Image Updated Successfully",
            });
          } else {
            responseReturn(res, 404, { error: "Image Upload Failed" });
          }
        } catch (error) {
          responseReturn(res, 404, { error: error.message });
        }
      }
    });
  };
  // End Method
}

module.exports = new paintingController();
