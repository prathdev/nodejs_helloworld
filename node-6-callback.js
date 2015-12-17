

// https://github.com/maxogden/art-of-node

var fs = require('fs')
var myNumber = undefined

function addOne(callback) {
  fs.readFile('node-6-callback.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
    callback()
  })
}

function logMyNumber() {
  console.log(myNumber)
}

addOne(logMyNumber)


