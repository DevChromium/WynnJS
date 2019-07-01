const fetchItem = require('./api/v1/fetchItem');
const fetchPlayer = require('./api/v2/fetchPlayer');
const fetchGuild = require('./api/v1/fetchGuild');
const fetchIngredient = require('./api/v2/fetchIngredient');
const fetchServers = require('./api/v1/fetchServers');
const fetchTerritories = require('./api/v1/fetchTerritories');
module.exports = class WynnJS {

    constructor() {
        super(
            this.fetchItem = fetchItem,
            this.fetchPlayer = fetchPlayer,
            this.fetchGuild = fetchGuild,
            this.fetchIngredient = fetchIngredient,
            this.fetchServers = fetchServers,
            this.fetchTerritories = fetchTerritories
        )
    }

    async fetchItem(item);
    async fetchPlayer(username);
    async fetchGuild(guild);
    async fetchIngredient(ingredient);
    async fetchServers();
    async fetchTerritories();

}
