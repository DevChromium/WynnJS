const req = require('request');

module.exports = async function fetchGuild(guild) {
        return new Promise((resolve, reject) => {
            if (!guild || typeof guild !== 'string') return reject(new TypeError("Invalid guild"));
            let endpoint = `https://api.wynncraft.com/public_api.php?action=guildStats&command=${guild}`
            req.get(endpoint, (err, res, body) => {
                if (!error && res.statusCode == '200') {
                    return resolve(JSON.parse(body));
                } else {
                    return reject(JSON.parse(body));
                }
            });
        });
}