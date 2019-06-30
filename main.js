const req = require('request')
module.exports = class WynnJS {

    constructor() {
        
    }

      fetchItem(item) {
        return new Promise((resolve, reject) => {
            if (!item || typeof item !== 'string') return reject(new TypeError('Invalid item.'));
            let endpoint = `https://api.wynncraft.com/public_api.php?action=itemDB&search=${item.toString()}`;
            req.get(endpoint, (err, res, body) => {
                if(!error && res.statusCode == '200') { return resolve(JSON.parse(body)); } else { return reject(JSON.parse(body)); }
            });
        });
    }

    fetchPlayer(username) {
        return new Promise((resolve, reject) => {
            if(!username || typeof username !== 'string') return reject(new TypeError("Invalid username"));
            let endpoint = `https://api.wynncraft.com/v2/player/${username}/stats`
            req.get(endpoint, (err, res, body) => {
                if(!error && res.statusCode == '200') { return resolve(JSON.parse(body)); } else { return reject(JSON.parse(body)); }
            });
        });
    }

    fetchGuild(guild) {
        return new Promise((resolve, reject) => {
            if(!guild || typeof guild !== 'string') return reject(new TypeError("Invalid guild"));
            let endpoint = `https://api.wynncraft.com/public_api.php?action=guildStats&command=${guild}`
            req.get(endpoint, (err, res, body) => {
                if(!error && res.statusCode == '200') { return resolve(JSON.parse(body)); } else { return reject(JSON.parse(body)); }
            });
        });
    }

    fetchIngredient(ingredient) {
        return new Promise((resolve, reject) => {
            if(!ingredient || typeof ingredient !== 'string') return reject(new TypeError("Invalid ingredient"));
            let endpoint = `https://api.wynncraft.com/v2/ingredient/get/${ingredient}}`
            req.get(endpoint, (err, res, body) => {
                if(!error && res.statusCode == '200') { return resolve(JSON.parse(body)); } else { return reject(JSON.parse(body)); }
            });
        });
    }

    fetchServers() {
        return new Promise((resolve, reject) => {
            let endpoint = `https://api.wynncraft.com/public_api.php?action=onlinePlayers`
            req.get(endpoint, (err, res, body) => {
                if(!error && res.statusCode == '200') { return resolve(JSON.parse(body)); } else { return reject(JSON.parse(body)); }
            });
        });
    }

    fetchTerritories() {
        return new Promise((resolve, reject) => {
            let endpoint = `https://api.wynncraft.com/public_api.php?action=territoryList`
            req.get(endpoint, (err, res, body) => {
                if(!error && res.statusCode == '200') { return resolve(JSON.parse(body)); } else { return reject(JSON.parse(body)); }
            });
        });
    }

}
