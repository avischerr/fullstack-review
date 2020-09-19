const express = require('express');
let app = express();
var parser = require('body-parser');
var queries = require('../database/index');

app.use(parser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var username;// capture user input here
  console.log('req.body in post req: ', req.body);
  queries.addUser(username, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result);
    }
  })
  res.send(username);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

});

// app.get() for one user's repos according to input

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

