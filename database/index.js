var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "githubdb"
});

connection.connect();

// Query Helper Functions

const addUser = (input, cb) => {
  connection.query('insert into users (name) values (?)', [input.name], (err, result) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  })
};

module.exports = {
  connection,
  addUser
};



// ----------- ORIGINAL CODE FOR MONGOOSE BELOW ------------

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher');

// let repoSchema = mongoose.Schema({
//   // TODO: your schema here!
// });

// let Repo = mongoose.model('Repo', repoSchema);

// let save = (/* TODO */) => {
//   // TODO: Your code here
//   // This function should save a repo or repos to
//   // the MongoDB
// }

// module.exports.save = save;

