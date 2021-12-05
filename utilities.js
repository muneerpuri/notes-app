const fs = require('fs')
const chalkAnimation = require('chalk-animation');

const addNoteToFIle = (title,body)=>{
    let notes = loadNotesFromFiles()
    let findDublicate = notes.find(el=>el.title === title)
    if(!findDublicate){
        notes.push({title:title,body:body})
        let data = JSON.stringify(notes)
        fs.writeFileSync('notes.txt',data)
        chalkAnimation.karaoke('note added')
    }else{
        chalkAnimation.neon('dublicate note found')
    }
}
const readingNote = (title)=>{
    let notes = loadNotesFromFiles()
    let foundNote = notes.filter(el=>el.title === title)
    if(foundNote.length > 0){
        console.log(foundNote)
    }else{
        console.log('note found')
    }
}
const listAllNotes = (title)=>{
    let notes = loadNotesFromFiles()
    chalkAnimation.rainbow('NOTES\n')
    notes.forEach((el)=>{
        console.log(el.title)
    })
}
const removeNoteFromFile = (title)=>{
    let notes = loadNotesFromFiles()
    let removedNotesArr = notes.filter(el=>{
        return el.title !== title
    })
    if(removedNotesArr.length > 0){
        let data = JSON.stringify(removedNotesArr)
        fs.writeFileSync('notes.txt',data)
    }else{
        chalkAnimation.rainbow('no notes found with title ',title)
    }
}
const loadNotesFromFiles = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.txt')
        const dataString = dataBuffer.toString()
        const data = JSON.parse(dataString)
        return data
    }catch(e){
        return []
    }
}


module.exports={addNoteToFIle,removeNoteFromFile,listAllNotes,readingNote}