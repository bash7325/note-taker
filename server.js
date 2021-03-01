//require packages
const express = require("express");
const app = express();
const path = require("path");

//PORT
const PORT = process.env.PORT || 3000;

//express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//routes
require("./routes/htmlRoutes")(app);
// require("./routes/apiRoutes")(app);

//Start Server
app.listen(PORT, () => {
  console.log("server is listening on port:" + PORT);
});
