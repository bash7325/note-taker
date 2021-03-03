//unique ID package and filesystem package
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

module.exports = (app) => {
  //GET requests.  Read db.json file then return the saved notes as JSON
  app.get("/api/notes", (req, res) => {
    fs.readFile("db/db.json", (error, data) => {
      res.json(JSON.parse(data));
    });
  });
  //POST requests.  saves new notes by adding to the db.json file and assigns a unique id using uuid package
  app.post("/api/notes", (req, res) => {
    var newNote = req.body;
    newNote.id = uuidv4();
    fs.readFile("db/db.json", (error, data) => {
      var data = JSON.parse(data);
      data.push(newNote);
      fs.writeFile("db/db.json", JSON.stringify(data), (error) => {
        if (error) throw error;
        console.log("Note Written");
      });
    });
    res.json(newNote);
  });
  //reads all the notes from db.json, removes notes that have the given id then rewrites back to db.json
  app.delete("/api/notes/:id", (req, res) => {
    fs.readFile("db/db.json", (error, data) => {
      let noteId = req.params.id;
      let noteData = JSON.parse(data);
      noteData = noteData.filter( (note) => {
        if (noteId != note.id) {
          return true;
        } else {
          return false;
        }
      });
      fs.writeFile("db/db.json", JSON.stringify(noteData), (error) => {
        if (error) throw error;
        res.end(console.log("Note Deleted"));
      });
    });
  });
};
