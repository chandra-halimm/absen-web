const express = require("express");
const router = express.Router();
const userModels = require("../models/user");
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
  const users = await userModels.create({
    nip,
    nama,
    password,
  });

  res.status(200).json({
    data: users,
    metadata: "okok",
  });
});

router.put("/", async (req, res) => {
  const { nip, nama, password, passwordBaru } = req.body;

  const userData = await userModels.findOne({ where: { nip: nip } });

  console.log(userData);

  if (userData.password === password) {
    const users = await userModels.update(
      {
        nama,
        password: passwordBaru,
      },
      { where: { nip: nip } }
    );
    res.json({
      users,
    });
  } else {
    res.json({
      error: "data invalid",
    });
  }

  // res.status(200).json({
  //   data: users,
  //   metadata: "okok",
  // });
});

module.exports = router;
