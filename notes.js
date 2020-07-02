const fs= require('fs')
const chalk= require('chalk')
const { debugPort } = require('process')
const getNotes= ()=>{
    return "Your Notes..."
}
const readNotes=(title)=>{
    const notes= loadNotes()
    const findit= notes.find(note=> note.title===title)
    debugger
    if(findit){
        console.log(chalk.inverse(findit.title))
        console.log(findit.body)
    }
    else{
        console.log(chalk.red("No Note Found in here"))
    }
}

const listNotes= ()=> {
    const notes= loadNotes()
    console.log(chalk.bold("Your Notes"))
    notes.forEach((note)=> {
        console.log(note.title)
    })
}
const removeNote= (title)=>{
    const notes= loadNotes()
    const found_notes= notes.filter((note)=> note.title!==title)
        if(notes.length>found_notes.length){
            console.log(chalk.green("Note Removed!"))
            saveNotes(found_notes)
        }
        else
            console.log(chalk.red("No note found!"))
}


const addNote= (title,body)=>{
    const notes= loadNotes()
   // console.log(notes)
    const duplicates= notes.filter((note)=> note.title===title )
    const duplicate= notes.find(note=> note.title===title)
if (!duplicate){
    notes.push({
    title: title,
    body: body
    })
    saveNotes(notes)
    console.log('New note added')
}
  else
    console.log('Note Title already taken')
}

const loadNotes= ()=>{
    try{
    const dataBuffer= fs.readFileSync('notes.json')
    const dataJSON= dataBuffer.toString()
    return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

const saveNotes= (notes)=>{
    const jsonString= JSON.stringify(notes)
    fs.writeFileSync('notes.json',jsonString)
}

module.exports= {
    getNotes:getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNotes:readNotes
}