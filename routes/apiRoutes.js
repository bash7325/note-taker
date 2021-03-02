const { v4: uuidv4 } = require('uuid');
const fs = require ("fs");

module.exports = (app) => {
  
  app.get('/api/notes', (req, res) => {
    fs.readFile("db/db.json", "utf8", function(error,data) {
      res.json(JSON.parse(data));
    });
    
  });

    app.post("/api/notes", (req, res) => {
    var newNote = req.body;
    newNote.id = uuidv4();
      fs.readFile("db/db.json", "utf8", (error,data) => {
        var data = JSON.parse(data);
        data.push(newNote);
        fs.writeFile("db/db.json", JSON.stringify(data), (error) => {
          if (error)
           throw error;
           console.log("Note Written");
        })
      });
      res.json(newNote);

    });

};