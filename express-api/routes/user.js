const express = require("express");
const router = express.Router();
const userModels = require("../models/user");
const bcrypt = require("bcrypt");
const passwordCheck = require("../utils/passwordCheck");
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

  try {
    const encryptedPassword = await bcrypt.hash(password, 10);

    const users = await userModels.create({
      nip,
      nama,
      password: encryptedPassword,
    });

    if (!users) {
      res.status(400).json({
        message: "error",
      });
    } else {
      res.status(200).json({
        registered: users,
        metadata: "okok",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "internal server error",
    });
  }
});

router.put("/", async (req, res) => {
  const { nip, nama, password, passwordBaru } = req.body;

  try {
    const check = await passwordCheck(nip, password);

    const encryptedPassword = await bcrypt.hash(passwordBaru, 10);

    if (check.compare === true) {
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
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "server internal error",
    });
  }
});

router.post("/login", async (req, res) => {
  const { nip, password } = req.body;
  try {
    const check = await passwordCheck(nip, password);
    if (check.compare === true) {
      res.status(200).json({
        users: check.userData,
        metadata: "login success",
      });
    } else {
      res.status(400).json({
        error: "login gagal  ",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err: "server internal error",
    });
  }
});

module.exports = router;
