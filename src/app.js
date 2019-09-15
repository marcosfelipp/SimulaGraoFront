var express = require('express')
const path = require('path');

var app = express()
app.use(express.static(path.join(__dirname, 'www')));
var html_dir = path.dirname(__filename) + '/www/';

app.get('/',function(req,res){
    console.log(path.dirname(__filename));
    console.log(__dirname)
    res.sendFile(html_dir + 'dashboard.html');
  });

var server = app.listen(8080, function () {

    var host = 'localhost'
    var port = server.address().port

    console.log('Express app listening at http://%s:%s', host, port)

})