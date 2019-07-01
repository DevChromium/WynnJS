const req = require('request');

module.exports = async function fetchServers() {
    return new Promise((resolve, reject) => {
        let endpoint = `https://api.wynncraft.com/public_api.php?action=onlinePlayers`
        req.get(endpoint, (err, res, body) => {
            if (!err && res.statusCode == '200') {
                return resolve(JSON.parse(body));
            } else {
                return reject(JSON.parse(body));
            }
        });
    });
}