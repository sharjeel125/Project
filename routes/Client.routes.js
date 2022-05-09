const express = require("express");
const router = express.Router();

const client = require("../Controllers/Client.controller.js");


	// Create a new Client Record

  router.post("/create", client.create);

  	// Retrieve all Client Record
  router.get("/", client.findAll);
  router.get("/:clients/:date", client.findAllbyDate);

  



module.exports = router;