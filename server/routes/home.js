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
  // const GOOGLE_API_KEY = "AIzaSyA09e-RrcHWfNSrsUtl-IWUKluHMxBRwvs";
  // const latitude = req.body.latitude;
  // const longitude = req.body.longitude;
  // const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`;

  // axios.get(URL).then(response => {
  //   const address = response.data.results[0].formatted_address;
  //   res.send(address);
  // });
});

module.exports = router;
