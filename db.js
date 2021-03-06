const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.x26vs.mongodb.net/Test",

  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("MongoDB connection succeeded.");
    } else {
      console.log(
        "Error in DB Connection:" + JSON.stringify(err, undefined, 2)
      ); //2 is two space character for printing the error message
    }
  }
);
mongoose.set("useFindAndModify", false); //to avoid deprecated warnings
module.exports = mongoose;
