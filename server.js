//require packages
const express = require("express");
const app = express();
const path = require("path");
//PORT
const PORT = process.env.PORT || 3000;

//Start Server
app.listen(PORT, () => {
    console.log("server is listening on port:" + PORT)
});
