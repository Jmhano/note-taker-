const router = require("express").Router();
const { notes } = require("../../data/notes.json");
const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../../data/notes.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

router.get("/notes", (_, res) => {
  res.json(notes);
});

router.post("/notes", (req, res) => {
  console.log("request:", JSON.stringify(req.body));

  createNewNote(req.body, notes);
});

// router.delete("/notes", (req, res) => {
// });

module.exports = router;
