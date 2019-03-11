const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const database = require('./db');
const cors = require('cors');

app.use(cors());

const connection = mysql.createConnection(database);
connection.connect();

let links;

connection.query('SELECT url FROM urlLinks', function(err, results) {
  if (err) throw err

  links = results;
  for (var i = 0; i < results.length; i++) {
  console.log('Results: ' + results[i].url)
  }

})

connection.end();

app.get('/links', function (req, res) {
  res.send(links);
})

app.get('/', function (req, res) {
  res.send("/ Path WORKS");
})

app.get('/test', function (req, res) {
  res.send("Hello this path works!");
})

app.listen(4000, function() {
  console.log('Pinterest App Server is listening to port 4000!');
})