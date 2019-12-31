const validator= require('validator')
const yargs = require('yargs')
const notes= require('./notes.js')
const chalk = require('chalk')


//console.log(validator.isEmail('bruh@gmail.com'))
yargs.version('1.1.0')


yargs.command({
    command: 'add',
    describe: 'to add notes',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'note description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title,argv.body)
      
    }
    
})

yargs.command({
    command: 'remove',
    describe: 'to remove notes',
    builder:{
        title:{
            describe:'title of note',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title)
      
    }
    
})

yargs.command({
    command: 'list',
    describe: 'to listnotes',
    handler: function(){
        notes.listNotes()
      
    }
    
})

yargs.command({
    command: 'read',
    describe: 'to read notes',
    builder:{
        title:{
            describe:'title of note to be searched',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title)
      
    }
    
})

yargs.parse()

/*const para= process.argv[2]

if (para==='add')
{
    console.log('adding....')
}
else if (para === 'remove')
{
    console.log('removing....')
}*/
