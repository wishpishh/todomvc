var express = require('express'),
	path = require('path'),
	app = express(),
	port = 4444,
	bodyParser = require('body-parser');

require('node-jsx').install();

app.get('*', function (req, res) {
	res.json({
		'route': 'Page does not exist.'
	});
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);