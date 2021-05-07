var fs = require('fs');

fs.writeFile('testfile_writeFile.txt', 'New content here!', function(err){
    if (err) throw err;
    console.log('Replaced!');
});