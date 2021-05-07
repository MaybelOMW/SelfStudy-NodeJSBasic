var fs = require('fs');

fs.unlink('testfile_appendFile.txt', function(err){
    if(err) throw err;
    console.log('File deleted!');
});