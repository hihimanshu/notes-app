//const validator = require('validator')
const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')

//customize yargs version
yargs.version('1.1.0');

//create add command using yargs. run >> node app.js add --title="Shopping list" --body="notes body"
yargs.command({
    command: 'add',
    describe: 'Adding new notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

//create remove command using yargs
yargs.command({
    command: 'remove',
    describe: 'Removing notes',
    builder: {
        title: {
            describe: 'Note title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler() {
        notes.removeNote(yargs.argv.title);
    }
})

//create list command using yargs
yargs.command({
    command: 'list',
    describe: 'Listing all the notes',
    handler() {
        notes.listNotes();
    }
})

//create read command using yargs
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Note title to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

yargs.parse();
// console.log(yargs.argv);
// const command = process.argv[2];
// if(command === 'add') {
//     console.log('Adding notes..');
// } else if(command === 'remove'){
//     console.log('Removing notes...');
// }
//console.log(getNotes());

//console.log(chalk.green.bold.bgWhite('Success'));

//console.log(validator.isEmail('gmail.com'));

//console.log(validator.isURL('https://node.io'));
