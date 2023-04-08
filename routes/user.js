const express = require("express");
const router = express.Router();
const userModels = require("../models/user");
const bcrypt = require("bcrypt");
//routing endpoint user pertama

router.get("/", async (req, res) => {
  const users = await userModels.findAll();

  res.status(200).json({
    data: users,
    metadata: "okok",
  });
});

router.post("/", async (req, res) => {
  const nip = req.body.nip;
  const nama = req.body.nama;
  const password = req.body.password;

  const encryptedPassword = await bcrypt.hash(password, 10);

  const users = await userModels.create({
    nip,
    nama,
    password: encryptedPassword,
  });

  res.status(200).json({
    data: users,
    metadata: "okok",
  });
});

router.put("/", async (req, res) => {
  const { nip, nama, password, passwordBaru } = req.body;

  const userData = await userModels.findOne({ where: { nip: nip } });
  const compare = await bcrypt.compare(password, userData.password);
  const encryptedPassword = await bcrypt.hash(passwordBaru, 10);

  if (compare === true) {
    const users = await userModels.update(
      {
        nama,
        password: encryptedPassword,
      },
      { where: { nip: nip } }
    );
    res.status(200).json({
      data: { updated: users },
      metadata: "update data success",
    });
  } else {
    res.status(400).json({
      error: "data invalid",
    });
  }
});

module.exports = router;
