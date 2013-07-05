var express = require('express');

var app = express.createServer(express.logger());

var fs=require('fs');

app.get('/', function(request, response) {
  fs.readFileSync('index.html',function(err,data){
  	if(err){
  		console.error(err);
  	}else{
  		response.send(data);
  	}
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});