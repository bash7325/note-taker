const path = require("path");
const fs =require("fs");

module.exports = function(app) {
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Develop/public/index.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Develop/public/index.html"));
});
};