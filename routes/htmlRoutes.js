const path = require("path");
const fs = require("fs");

module.exports = function(app) {
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
};