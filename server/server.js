const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
const home = require("./routes/home");
app.use("/", home);

//server on
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
