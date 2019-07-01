const req = require('request')

module.exports  = async function fetchItem(item) {
    return new Promise((resolve, reject) => {
        if (!item || typeof item !== 'string') return reject(new TypeError('Invalid item.'));
        let endpoint = `https://api.wynncraft.com/public_api.php?action=itemDB&search=${item}`;
        req.get(endpoint, (err, res, body) => {
            if (!err && res.statusCode == '200') {
                return resolve(JSON.parse(body));
            } else {
                return reject(JSON.parse(body));
            }
        });
    });
}