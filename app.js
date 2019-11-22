const fs = require('fs')
const note = require('./notes')
const _ = require('lodash')

let x = _.uniq([1,2,3,4,1,1,1,1,2,2,2])
console.log(x)

console.log(note.age)
let name = note.myfuncion() 
fs.appendFileSync('myfile.txt',`my name is ${name} my age is ${note.age}`)