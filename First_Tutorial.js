var http = require('http');
var dt = require('./datetime_module');
var url = require('url');

http.createServer(function(req, res){
  // Add an HTTP Header to display the response in HTML
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Accessing DateTime Module
  res.write("Current Datetime: " + dt.myDateTime() + "<br/>");

  // Get the URL that comes after the domain name
  res.write("After Domain: " + req.url + "<br/>");

  // Read URL Query String
  var q = url.parse(req.url, true).query;
  res.write("Year: " + q.year + "<br/>");
  res.write("Month: " + q.month + "<br/>");

  res.end();
}).listen(8080); 
