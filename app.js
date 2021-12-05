const yargs = require('yargs')
const notesUtilities = require('./utilities')

yargs.command({
    command: 'add',
    describe: 'adding a note',
    builder: {
        title: {
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesUtilities.addNoteToFIle(argv.title,argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder: {
        title: {
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesUtilities.removeNoteFromFile(argv.title)
    }
})
yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder: {
        title: {
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesUtilities.readingNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler(){
        notesUtilities.listAllNotes()
    }
})
yargs.parse()