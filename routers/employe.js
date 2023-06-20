const express = require("express");
const router = express.Router();
const Employee = require("../models/employee");

router.get("/", async (req, res) => {
  try {
    let data = await Employee.find();

    res.json(data);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.get("/:id", async (req, res) => {
    let data = await Employee.findById(req.params.id);

    res.json(data);
})

module.exports = router;
