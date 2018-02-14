//Set up requirements
var express = require("express");
var Request = require('request');
var bodyParser = require('body-parser');
//var favicon = require('serve-favicon');
var favicon = require('underscore');

//Create an 'express' object
var app = express();
//app.use(favicon(__dirname + '/public/media/favicon.ico'));
//app.use(favicon(__dirname + '//static/images/weSTEMfavicon.png'))
//Set up the views directory
app.set("views", __dirname + '/');
//Set EJS as templating language WITH html as an extension
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
//Add connection to the public folder for css & js files
app.use(express.static(__dirname + '/'));

// Enable json body parsing of application/json
app.use(bodyParser.json());

var port = process.env.PORT || 8000;
// Start the server & save it to a var
var server = app.listen(port);
//Pass the server var as an arg to the 'io' init requirement
var io = require('socket.io')(server);
console.log('Express started on port ' + port);

//ROUTES
app.get("/", function(request, response){
	var dataForThePage = {
		message : "Try adding a forward slash plus a word to the url"
	};
	response.render('index', dataForThePage);
});
