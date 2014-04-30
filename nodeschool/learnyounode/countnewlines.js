var fs = require('fs');

//Read the content of file passed in argument as string
var fileContent = fs.readFileSync(process.argv[2]).toString();

//Convert string to array of lines
var linesInFile = fileContent.split('\n')

//Get rid of extra array Element
linesInFile = linesInFile.slice(1,linesInFile.length);

var totalNumOfLines = 0;

linesInFile.forEach(function(line){
  ++totalNumOfLines;
});

console.log(totalNumOfLines);
