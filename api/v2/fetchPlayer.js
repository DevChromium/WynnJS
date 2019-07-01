const req = require('request');

module.exports = async function fetchPlayer(username) {
       return new Promise((resolve, reject) => {
           if (!username || typeof username !== 'string') return reject(new TypeError("Invalid username"));
           let endpoint = `https://api.wynncraft.com/v2/player/${username}/stats`
           req.get(endpoint, (err, res, body) => {
               if (!err && res.statusCode == '200') {
                   return resolve(JSON.parse(body));
               } else {
                   return reject(JSON.parse(body));
               }
           });
       });
}