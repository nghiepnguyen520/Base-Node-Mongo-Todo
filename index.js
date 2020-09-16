const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const rfs = require("rotating-file-stream");
const path = require("path");
const apiRoute = require("./src/routes/router");
const connectDatabase = require("./src/configs/db.config");

require("dotenv").config();

connectDatabase();

const port = process.env.PORT || 3200;
const isProduction = process.env.NODE_ENV === "production";
const app = express();

app.use(helmet());
app.use(cors());

//Morgan show log in server when have request
//If Production save log in file logs
const accessLogStream = rfs.createStream("access.log", {
  interval: "1d",
  path: path.join(__dirname, "log"),
});
app.use(
  isProduction
    ? morgan("combined", {
        stream: accessLogStream,
      })
    : morgan("common")
);

//server only use json
app.use(express.json());

app.use("/api", apiRoute);
app.get("/", (req, res) => {
  res.json({ message: "Hello Asta" });
});
// app.get("*", (req, res) => {
//   res.json({ message: "Hello Asta" });
// });

app.listen(port, () => console.log("Server run: ", port));
