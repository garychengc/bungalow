const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

/* 
GET Request for the home page
*/
router.get("/", (req, res, next) => {
  console.log("User has connected with the server!");
});

/* 
POST Request for the home page for geolocation of user
*/
router.post("/", (req, res, next) => {
  // axios.get(URL).then(response => {
  //   const address = response.data.results[0].formatted_address;
  //   res.send(address);
  // });
});

module.exports = router;
