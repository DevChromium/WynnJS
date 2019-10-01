const fetchItem = require('./api/v1/fetchItem');
const fetchPlayer = require('./api/v2/fetchPlayer');
const fetchGuild = require('./api/v1/fetchGuild');
const fetchIngredient = require('./api/v2/fetchIngredient');
const fetchServers = require('./api/v1/fetchServers');
const fetchTerritories = require('./api/v1/fetchTerritories');
const fetchGuildLeaderboard = require('./api/v1/fetchGuildLeaderboard');
const fetchPlayerLeaderboard = require('./api/v1/fetchPlayerLeaderboard');
const fetchPvPLeaderboard = require('./api/v1/fetchPvPLeaderboard');
const fetchGuildList = require('./api/v1/fetchGuildList');
const search = require('./api/v1/search');

module.exports = class WynnJS {

    constructor() {
            this.fetchItem = fetchItem,
            this.fetchPlayer = fetchPlayer,
            this.fetchGuild = fetchGuild,
            this.fetchIngredient = fetchIngredient,
            this.fetchServers = fetchServers,
            this.fetchTerritories = fetchTerritories,
            this.fetchGuildLeaderboard = fetchGuildLeaderboard,
            this.fetchPlayerLeaderboard = fetchPlayerLeaderboard,
            this.fetchPvPLeaderboard = fetchPvPLeaderboard,
            this.fetchGuildList = fetchGuildList,
            this.search = search
    }

}
