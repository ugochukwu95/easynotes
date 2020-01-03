module.exports = (app) => {
	const notes = require("../controllers/note.controller.js");

	// Create a new note
	app.post('/notes', notes.create);

	// Retrieve all notes
	app.get('/notes', notes.findAll);

	// retrieve a single note with noteId
	app.get('/notes/:noteId', notes.findOne);

	// Update a note with noteId
	app.post('/notes/:noteId', notes.update);

	// Delete a Note with noteId
	app.post('/notes/:noteId', notes.delete);
}