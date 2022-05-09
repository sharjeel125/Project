const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ClientSchema = new Schema(
  {
    ClientId: {
      type: String,
    },
    ClientName: {
      type: String,
    },
    ClientPhoneNumber: {
      type: String,
    },
    Amount: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("All_Clients_List", ClientSchema);
