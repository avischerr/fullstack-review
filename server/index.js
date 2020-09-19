const express = require('express');
let app = express();
var parser = require('body-parser');
var queries = require('../database/index');
var helpers = require('../helpers/github.js')

app.use(parser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // var username;// capture user input here
  // console.log('req.body in post req: ', req.body);
  // queries.addUser(username, (err, result) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     res.send(result);
  //   }
  // })
  // res.send(username);

  helpers.getReposByUsername(username, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log("get repos result: ", result);
      res.send(result);
    }
  })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

});

// app.post('/repos', function (req, res) {
//   // This route should send back a user's repos
//   helpers.getReposByUsername(username, (err, result) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("get repos result: ", result);
//       res.send(result);
//     }
//   })
// });

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

