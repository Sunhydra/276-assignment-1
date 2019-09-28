
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();
app.use(express.static(__dirname+'/views/pages'));
app.get('/', function(req, res) {
res.sendFile(__dirname+ '/views/pages/calculator.html');
}) .listen(PORT, () => console.log(`Listening on ${ PORT }`))
