const express = require("express");
const router = express.Router();
const adminModels = require("../models/admin");

router.get("/", async (res, req) => {
  const admin = await adminModels.findAll();

  res.json({
    status: 200,
    data: "okok",
    metadata: "wkwkwk",
  });
});

module.exports = router;
