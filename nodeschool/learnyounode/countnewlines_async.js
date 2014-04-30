var fs = require('fs');

//Read the content of file passed in argument as string
fs.readFile(process.argv[2], function(err, data) {
  if (err) throw err;

  var fileContent = data.toString();

  //Convert string to array of lines
  var linesInFile = fileContent.split('\n')

  //Get rid of extra array Element
  linesInFile = linesInFile.slice(1,linesInFile.length);

  var totalNumOfLines = 0;

  linesInFile.forEach(function(line){
    ++totalNumOfLines;
  });


  console.log(totalNumOfLines);

});

