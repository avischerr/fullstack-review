const axios = require('axios');
const config = require('../config.js');
const queries = require('../database/index.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/${username}/user/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  Axios.get(options)
    .then((res) => {
      res.send(res);
    })
    .catch((err) => {
      console.error(err);
    })
}

module.exports.getReposByUsername = getReposByUsername;