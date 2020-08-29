const fs = require("fs");

const getNotes = function () {
	return "Your notes...";
};

const addNote = function (title, body) {
	const notes = loadNotes();
	const duplicateNotes = notes.filter((note) => note.title === title);
	if (duplicateNotes.length === 0) {
		notes.push({ title, body });
		saveNotes(notes);
		console.log("New note added!");
	} else {
		console.log("Note with this title already added");
	}
};

const loadNotes = function () {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const dataJSON = dataBuffer.toString();

		return JSON.parse(dataJSON);
	} catch (err) {
		return [];
	}
};

const saveNotes = function (notes) {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("notes.json", dataJSON);
};

module.exports = { getNotes, addNote };
