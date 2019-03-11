const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');


app.get('/', function (req, res) {
  res.send("/ Path WORKS");
})

app.get('/test', function (req, res) {
  res.send("Hello this path works!");
})

app.listen(4000, function() {
  console.log('Pinterest App Server is listening to port 4000!');
})