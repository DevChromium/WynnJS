const req = require('request');

module.exports = async function fetchPvPLeaderboard(timeframe) {
    return new Promise((resolve, reject) => {
        if (!timeframe) return reject(new TypeError("Invalid timeframe"));
        let endpoint = `https://api.wynncraft.com/public_api.php?action=statsLeaderboard&type=pvp&timeframe=${timeframe}`
        req.get(endpoint, (err, res, body) => {
            if(!err && res.statusuCode == '200') { return resolve(JSON.parse(body)) }
            else { return reject(JSON.parse(body)) }
        });
    });
}