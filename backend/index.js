const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const user = require("../backend/routes/users");
const appData = require("../backend/routes/appData");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to DB.");
    app.listen(port, () => console.log(`App running on port ${port}`));
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use("/api/users", user);
app.use("/api/appData", appData);

app.get("/", (req, res) => {
  return res.status(200).send({ info: "Node.js, Express, and MongoDb" });
});
