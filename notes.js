const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
	return "Your notes...";
};

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNotes = notes.filter((note) => note.title === title);
	if (duplicateNotes.length === 0) {
		notes.push({ title, body });
		saveNotes(notes);
		console.log(chalk.green.inverse("New note added!"));
	} else {
		console.log(chalk.red.inverse("Note with this title already added!"));
	}
};

const removeNote = (title) => {
	const notes = loadNotes();
	const notesToKeep = notes.filter((note) => note.title !== title);
	if (notesToKeep.length < notes.length) {
		saveNotes(notesToKeep);
		console.log(chalk.green.inverse("Note removed!"));
	} else {
		console.log(chalk.red.inverse("No note found!"));
	}
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const dataJSON = dataBuffer.toString();

		return JSON.parse(dataJSON);
	} catch (err) {
		return [];
	}
};

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("notes.json", dataJSON);
};

module.exports = { getNotes, addNote, removeNote };
