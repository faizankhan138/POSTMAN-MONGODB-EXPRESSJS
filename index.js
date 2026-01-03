const connectdb = require("./util/db");
const express = require("express");
const app = express();

require("dotenv").config();

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

const catagoryroutes = require("./routes/data.routes");

connectdb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", catagoryroutes);

app.get("/api", (req, res) => {
  res.json("about test");
});

app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
