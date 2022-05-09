const { firebaseFileUpload } = require("../helpers/index.js");
const Clients_Informations = require("../Models/Client.model.js");

// Create and Save a new Client Record

exports.create = (req, res) => {
  // Validate request
  // joi validator tanu suggest
  if (
    !req.body.ClientName ||
    !req.body.ClientId ||
    !req.body.ClientPhoneNumber ||
    !req.body.Amount
  ) {
    console.log("required field missing");
    res.status(403).send("required field missing");
    return;
  }
  if (!req.body.ClientId) {
    res.status(400).send({ ClientId: "Client-Id can not be empty!" });
    return;
  } else {
    Clients_Informations.findOne(
      {
        ClientId: req.body.ClientId,
      },
      (err, data) => {
        if (data) {
          res.send("Client-Id already exist");
        } else {
          // Create and save a Client
          const Client = new Clients_Informations({
            ClientName: req.body.ClientName,
            ClientId: req.body.ClientId,
            ClientPhoneNumber: req.body.ClientPhoneNumber,
            Amount: req.body.Amount,
          });

          // Save Client in the database
          Client.save(Client)
            .then((data) => {
              res.send(data);
            })
            .catch((err) => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while saving Client.",
              });
            });
        }
      }
    );
  }
};

exports.gettingImage = async (req, res) => {
  try {
    console.log(req.file);
    const imageUrl = await firebaseFileUpload(
      "/sharjeel images",
      req.file.filename,
      req.file.path
    );
    return res.status(200).send({ status: 200, file: req.file, imageUrl });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.messsage });
  }
};

// Retrieve all Clients from the database.
exports.findAll = (req, res) => {
  Clients_Informations.find().then(
    (data) => {
      console.log(data);
      res.json(data);
    },
    (err) => {
      console.log(err);
      res.send(err);
    }
  );
};
// Retrieve all Clients from the database according to date.
exports.findAllbyDate = (req, res) => {
  Clients_Informations.find({}).then(
    (data) => {
      console.log(data);
      res.json(data);
    },
    (err) => {
      console.log(err);
      res.send(err);
    }
  );
};
