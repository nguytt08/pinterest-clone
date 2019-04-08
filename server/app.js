const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const database = require('./db');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection(database);
connection.connect();

let links;

const sendLinks = () => {
connection.query('SELECT url, link_id FROM urlLinks', function(err, results) {
  if (err) throw err
  links = results;
  // for (var i = 0; i < results.length; i++) {
  // console.log('Results: ' + results[i].url)
  // console.log('Results 222: ' + results[i].link_id);
  // }
})
}

const deleteLink = (link_id) => {
  connection.query(`DELETE FROM urlLinks WHERE link_id = ${link_id};`, function(err, result) {
    if (err) throw err
    console.log('delete link error : ' + err);
  })
}

sendLinks();


// connection.end();
const insertURL = (links) => {
  console.log('insert url links: ' + links);
  connection.query(`INSERT INTO urlLinks (url, user_id) VALUES ('${links}', '1')`, function(err, result) {
    console.log('error: ' + err);
    if (err) throw err
      console.log("Record inserted");
  }
)}

app.get('/links', function (req, res) {
  sendLinks();
  res.send(links);
})

app.get('/', function (req, res) {
  sendLinks();
  res.send(links);
})

app.post('/addlink', function(req, res) {
  console.log('whats in this object: ' + req.body.newLink.link);
  const link = req.body.newLink.link;
  insertURL(link);
  sendLinks();
  res.send(links)
})

app.delete('/deletelink', function(req, res) {
  const link_id = req.body.link_id;
  console.log('deleting an index');
  console.log('this is hte link id: ' + link_id);
  deleteLink(link_id);
  sendLinks();
  res.send('Delete success');
})

app.listen(4000, function() {
  console.log('Pinterest App Server is listening to port 4000!');
})