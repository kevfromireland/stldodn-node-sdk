var express = require('express');
var bodyparser = require('body-parser');
var file = require('./file-upload.js');

var app = express();

app.use(bodyparser.json());
app.use(express.static(__dirname + '/public'));

app.post('/api/post', function(req, res) {
  file.upload(req.body.name).then(function(url) {
    res.json({
      downloadFrom: url
    });
  });  
});

app.listen(3000);
