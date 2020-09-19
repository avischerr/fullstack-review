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

const getUser = (username, cb) => {
  connection.query(`select * from repos, users where users.name = ${username} and repos.user = users.id`, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
}

module.exports = {
  connection,
  addUser,
  getUser
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

