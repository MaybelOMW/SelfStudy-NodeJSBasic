var fs = require('fs');

fs.rename('testfile_openWrite.txt', 'testfile_renamed.txt', function(err){
    if(err) throw err;
    console.log('File Renamed!');
});