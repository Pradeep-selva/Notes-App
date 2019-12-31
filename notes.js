const fs = require('fs')
const chalk = require('chalk')

const getNotes = function()
{
    return "Your notes...."
}

const addNotes = function(title, body)
{

    const notes = loadNotes()
    const duplicateNotes= notes.filter(function(notes){

        return notes.title===title
    })

    if(duplicateNotes.length===0)
    {
    notes.push({

        title: title,
        body: body
    })
    
    saveNotes(notes)
    console.log(chalk.bgGreen('Note succesfully added!'))

    }

    else{

        console.log(chalk.bgRed('Another note with same title already exists...'))
    }

}

const removeNotes = function(title)
{

    const notes= loadNotes()
    const l = notes.length
    const newNotes= notes.filter(function(notes){
        return notes.title !== title
    })
    if(newNotes.length !== l)
    {
        saveNotes(newNotes)
        console.log(chalk.bgGreen('Note removed succesfully'))
    }
    else
    {
        console.log(chalk.bgRed('Note with given title not found'))
    }
    
}

const listNotes = () => {

    const notes = loadNotes()
    console.log('            '+chalk.green.inverse.bold('~~YOUR NOTES~~'))
    for(var i = 0; i< notes.length; i++)
    {
        console.log((i+1)+'. '+ chalk.italic.cyan(notes[i].title))
    }

    if(notes.length===0)
    {
        console.log(chalk.bgRed('No notes were found! Please add some and try again..'))
    }
}

const readNote= (title)=>
{
    const notes = loadNotes()
    const reqNote= notes.find((notes)=> notes.title===title)

    if(reqNote)
    {
        console.log('            '+chalk.bold.green.inverse(reqNote.title))
        console.log('\n'+reqNote.body)
    }
    else
    {
        console.log(chalk.bgRed('The required note was not found..'))
    }

}

const saveNotes = function(notes)
{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}

const loadNotes = function()
{
    try{

        const dataBuffer= fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){

        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote

}
