var express = require('express');
//Including another file in my file. Since midddleware.js is in the same directory I used ./ in from of the file name.


var app = express();
var path = __dirname + '\\' + 'public';
// console.log(path);
// path = encodeURIComponent(path);
var PORT = 3000;

var middleware = require('./middleware.js');

//Adding app level authentication. The following adds the app level authentication
//app.use(middleware.requireAuthentication);

app.use(middleware.logger);

// app.get('/', function (req, res) {
// 	res.send('Hello Express!');
// });

//Adding route level authentication
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '\\public'));


app.listen(PORT, function () {
	
	console.log('Express server started on port: ' + PORT + '!');
});