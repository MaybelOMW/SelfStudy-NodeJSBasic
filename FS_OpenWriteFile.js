var fs = require('fs');

fs.open('testfile_openWrite.txt', 'w', function(err, file){
    if(err) throw err;
    console.log('Saved!');
});

