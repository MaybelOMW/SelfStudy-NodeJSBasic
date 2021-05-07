var fs = require('fs');

fs.appendFile('testfile_appendFile.txt', 'This is my text.', function(err){
    if(err) throw err;
    console.log('Updated!');
});