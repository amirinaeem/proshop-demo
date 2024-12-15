const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { AppData } = require("../models/appData");

router.get("/", async (req, res) => {
  const apps = await AppData.find().sort({ createdAt: -1 });
  return res.status(200).send(apps);
});

router.get("/:id", async (req, res) => {
  const apps = await AppData.findById(req.params.id);
  if (!apps)
    return res.status(404).send("The app with the given ID was not found.");

  return res.status(200).send(apps);
});

router.post("/", async (req, res) => {
  console.log(req.body);

  // const appData = new AppData({
  //   name: req.body.name,
  //   image: req.body.image,
  //   description: req.body.description,
  //   brand: req.body.brand,
  //   category: req.body.category,
  //   price: Number(req.body.price),
  //   countInStock: Number(req.body.countInStock),
  //   rating: Number(req.body.rating),
  //   numReviews: Number(req.body.numReviews),
  //   compatibleWith: req.body.compatibleWith,
  // });

  const appData = new AppData(
    _.pick(req.body, [
      "name",
      "image",
      "description",
      "brand",
      "category",
      "price",
      "countInStock",
      "rating",
      "numReviews",
      "compatibleWith",
    ])
  );

  await appData.save();

  return res.status(200).send(appData);
});

router.put("/:id", async (req, res) => {
  const apps = await AppData.findByIdAndUpdate(
    req.params.id,
    {
      price: req.body.price,
    },
    { new: true }
  );

  if (!apps)
    return res.status(404).send("The app with the given ID was not found.");

  return res.status(200).send(apps);
});

module.exports = router;
