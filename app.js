const chalk= require('chalk')
const yargs= require('yargs')
const notes= require('./notes.js')
const { string, demandOption } = require('yargs')

//const notes1= notes()

//console.log(chalk.bold.green('with a blue substring'))
yargs.version('1.1.0')


yargs.command({
    command:'add',
    describe: 'A function to Add a file',
    
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
       notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command:'remove',
    describe: 'A function to remove a file',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log('Please wait!Removing the note'),
        notes.removeNote(argv.title)

    }
})

yargs.command({
    command:'list',
    describe: 'A function to list all the files',
  
    handler(){
        console.log('Please wait!Bringing you a list')
        notes.listNotes()
        
    }
})
yargs.command({
    command:'read',
    describe: 'A function to read a file',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Please wait!Reading the note')
        notes.readNotes(argv.title)
    }
})
yargs.parse()