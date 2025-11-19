const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// Serve static images explicitly for Vercel
app.use("/images", express.static(path.join(__dirname, "public/images")));

// ==================== Category API ====================
app.get("/categories", (req, res) => {
  const filePath = path.join(__dirname, "data/category.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Internal Server Error");
    }

    try {
      res.json(JSON.parse(data));
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  });
});

// ==================== Restaurant Chains API ====================
app.get("/top-restaurant-chains", (req, res) => {
  const filePath = path.join(__dirname, "data/restaurantChains.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Internal Server Error");
    }

    try {
      res.json(JSON.parse(data));
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  });
});

module.exports = app;
