const mongoose = require("mongoose");

const connectDatabase = () => {
  const mongoDbUrl = `mongodb://${process.env.AUTH_USER}:${process.env.AUTH_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
  console.log("connectDatabase -> mongoDbUrl", mongoDbUrl);
  mongoose.Promise = global.Promise;

  mongoose
    .connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("Connection Db success!");
    })
    .catch((err) => {
      console.log(`Error to connect database ...\n${err}`);
      process.exit();
    });
};

module.exports = connectDatabase;
