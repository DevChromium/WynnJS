const req = require('request');

module.exports = async function search(name) {
    return new Promise((resolve, reject) => {
        if(!name || typeof name !== 'string') return reject(new TypeError("Invalid name"));
        let endpoint = `https: //api.wynncraft.com/public_api.php?action=statsSearch&search=${name}`
        req.get(endpoint, (err, res, body) => {
             if (!err && res.statusCode == '200') { return resolve(JSON.parse(body)) }
             else{ return reject(JSON.parse(body)) }
        });
    });
}