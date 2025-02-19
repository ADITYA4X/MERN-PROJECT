const { Schema, model } = require("mongoose");

const paintingSchema = new Schema(
  {
    sellerId: {
      type: Schema.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    shopName: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

paintingSchema.index(
  {
    name: "text",
    category: "text",
    type: "text",
    description: "text",
  },
  {
    weights: {
      name: 5,
      category: 4,
      type: 3,
      description: 2,
    },
  }
);

module.exports = model("paintings", paintingSchema);
