const chalk = require("chalk");
const yargs = require("yargs");

const { getNotes, addNote, removeNote } = require("./notes");

yargs.version("1.1.0");

yargs.command({
	command: "add",
	describe: "Add a new note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
		body: {
			describe: "Note body",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		addNote(argv.title, argv.body);
	},
});

yargs.command({
	command: "remove",
	describe: "Remove a note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		removeNote(argv.title);
	},
});

yargs.command({
	command: "list",
	describe: "List all Notes",
	handler() {
		console.log("Listing all Notes");
	},
});

yargs.command({
	command: "read",
	describe: "Read a note",
	handler() {
		console.log("Reading a note");
	},
});

yargs.parse();
