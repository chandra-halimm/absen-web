const express = require("express");
const router = express.Router();
const absensiModels = require("../models/absensi");

router.get("/", async (req, res) => {
  const absensi = await absensiModels.findAll();

  res.status(200).json({
    absensi,
    metadata: "test absensi endpoint",
  });
});

router.post("/checkin", async (req, res) => {
  const { nip } = req.body;
  const absensi = await absensiModels.create({
    nip,
    status: "in",
  });
  res.status(200).json({
    data: absensi,
    metadata: "checkin berhasil",
  });
});

router.post("/checkout", async (req, res) => {
  const { nip } = req.body;
  const absensi = await absensiModels.create({
    nip,
    status: "out",
  });
  res.status(200).json({
    data: absensi,
    metadata: "checkout Berhasil",
  });
});

module.exports = router;
