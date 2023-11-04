const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
    return 'Your notes...';
}

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title;
    // })
    const duplicateNotes = notes.filter( (note) => note.title === title)
    
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.bgGreen('new note added'));
    } else {
        console.log(chalk.bgRed('note title taken'));
    }   
}

const removeNote = (title) => {
    const notes = loadNotes();
    // const notesToKepp = notes.filter( (note) => {
    //     return note.title !== title;
    // })
    const notesToKepp = notes.filter( (note) => note.title !== title)
    if(notes.length !== notesToKepp.length) {
        saveNotes(notesToKepp);
        console.log(chalk.bgGreen('note removed'));
    } else {
        console.log(chalk.bgRed('No note found'));
    }
}

const listNotes = () => {
    console.log(chalk.green('Your notes '));
    const notes = loadNotes();
    notes.forEach(note => console.log(note.title));
}

const readNote = (title) => {
    const notes = loadNotes();
    const requiredNote = notes.find( (note) => note.title === title);
    if(requiredNote)
    console.log(chalk.green(requiredNote.title) +' '+ requiredNote.body)
    else
    console.log(chalk.red('No Note found'));
}
const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}
const loadNotes = () => {

    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};