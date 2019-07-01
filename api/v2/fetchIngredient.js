const req = require('request');

module.exports = async function fetchIngredient(ingredient) {
    return new Promise((resolve, reject) => {
        if (!ingredient || typeof ingredient !== 'string') return reject(new TypeError("Invalid ingredient"));
        let endpoint = `https://api.wynncraft.com/v2/ingredient/get/${ingredient}}`
        req.get(endpoint, (err, res, body) => {
            if (!err && res.statusCode == '200') {
                return resolve(JSON.parse(body));
            } else {
                return reject(JSON.parse(body));
            }
        });
    });
}