const express = require("express");
const router = express.Router();
const Userlist = require("../models/Userlist");

router.get("/", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.get("/:id", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

router.post("/", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Error creating data" });
  }
});

router.post("/login", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Error creating data" });
  }
});

router.put("/:id", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Error creating data" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Error creating data" });
  }
});

module.exports = router;
