const bcrypt = require("bcrypt");
const userModels = require("../models/user");

const passwordCheck = async (nip, password) => {
  const userData = await userModels.findOne({ where: { nip: nip } });
  const compare = await bcrypt.compare(password, userData.password);
  return { compare, userData };
};

module.exports = passwordCheck;
