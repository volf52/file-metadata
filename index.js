"use strict";
 
require('babel-register');
 
const app = require('./server/app').app,
      PORT = 8080;
 
app.listen(PORT, function() {
	console.log('Volf File metadata microservice running on port', PORT);
});