const express = require("express");
const cors = require("cors");
const port = 3300;

const sequelize = require("./db.config");
sequelize.sync().then(() => {
  console.log("database ready");
});

const userEndpoint = require("./routes/user");
const absensiEndpoint = require("./routes/absensi");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userEndpoint);
app.use("/absensi", absensiEndpoint);

app.listen(port, () => console.log(`running server on port : ${port}`));
