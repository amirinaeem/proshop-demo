const mongoose = require("mongoose");
const Joi = require("joi");

const appDataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name for the app"],
      minlength: 2,
      maxlength: 50,
    },
    image: {
      type: String,
      required: [true, "Please enter a image for the app"],
      minlength: 5,
      maxlength: 100,
    },
    description: {
      type: String,
      required: [true, "Please enter a description for the app"],
      minlength: 2,
      maxlength: 500,
    },
    brand: {
      type: String,
      required: [true, "Please enter a brand for the app"],
      minlength: 2,
      maxlength: 50,
    },
    category: {
      type: String,
      required: [true, "Please enter a category for the app"],
      minlength: 2,
      maxlength: 50,
    },
    price: {
      type: Number,
      required: [true, "Please enter a price for the app"],
    },
    countInStock: {
      type: Number,
      required: [true, "Please enter a countInStock for the app"],
    },
    rating: {
      type: Number,
      required: [true, "Please enter a rating for the app"],
    },
    reviews: [
      {
        review: {
          type: String,
          required: [true, "Please enter a review for the app"],
          minlength: 2,
          maxlength: 50,
        },
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: [true, "Enter a userID for the review"],
        },
      },
    ],
    numReviews: {
      type: Number,
      required: [true, "Please enter a rating for the app"],
    },
    compatibleWith: {
      type: [String],
      required: [true, "Please enter a compatibleWith for the app"],
    },
  },
  { timestamps: true }
);

const AppData = mongoose.model("AppData", appDataSchema);

module.exports = { AppData };
