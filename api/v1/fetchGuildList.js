const req = require("request")

module.exports = async function fetchGuildList() {
    return new Promise((resolve, reject) => {
      let endpoint = `https://api.wynncraft.com/public_api.php?action=guildList`
            req.get(endpoint, (err, res, body) => {
                if (!err && res.statusCode == '200') {
                    return resolve(JSON.parse(body));
                } else {
                    return reject(JSON.parse(body));
                }
            });   
    });
  
} 
