const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.use(serveStatic(__dirname + '/dist/'));
const port = process.env.PORT || 80;
app.get('/.*/', (request, response) => {
	response.sendFile(__dirname + '/dist/index.html');
});
app.listen(port);