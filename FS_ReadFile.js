var http = require('http');
var fs = require('fs')

http.createServer(function(req, res){
    // File System Read Files
    fs.readFile('testfile.html', function(err, data){
        // Add an HTTP Header to display the response in HTML
        res.writeHead(200, {'Content-Type': 'text/html'});
        
        // Print the File Content
        res.write(data);

        return res.end();
    });
}).listen(8080); 
