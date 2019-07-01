# WynnJS
A JavaScript wrapper for the official Wynncraft API, if you wish you may contribute to the wrapper.
This wrapper is a modification of https://github.com/FraWolf/wynncraft.js, all rights of the fetchPlayer and fetchItem goes to the author of wynncraft.js.

## Introduction
You only have a limited amount of API Calls per a certain period of time, this can differ per API endpoint. Please read more on the official documentation of the API. 
https://docs.wynncraft.com/


# Table of Contents
- [WynnJS](#wynnjs)
  * [Introduction](#introduction)
  * [Installation via Node Package Manager](#installation-via-node-package-manager)
  * [Usage](#usage)
    + [Initialization](#initialization)
    + [Legacy API](#Legacy)
        + [fetchItem](#fetchitem)
        + [fetchGuild](#fetchguild)
        + [fetchServers](#fetchservers)
        + [fetchTerritories](#fetchterritories)
        + [fetchGuildLeaderboard](#fetchGuildLeaderboard)
        + [fetchPlayerLeaderboard](#fetchPlayerLeaderboard)
        + [fetchPvPLeaderboard](#fetchPvPLeaderboard)
        + [search](#search)
    + [Version 2](#Version2)
        + [fetchPlayer](#fetchplayer)
        + [fetchIngredient](#fetchingredient)
        

## Installation via Node Package Manager
To get the latest version of WynnJS please use the following command in a command prompt.
```
npm i --save @devchromium/wynnjs@latest
```



## Usage

### Initialization
```JS
const wynnJS = require("@devchromium/wynnjs");
const wynn = new WynnJS();
```
### Legacy
#### fetchItem
This will return the item object from the item name you input.
```JS
let item = // code to get itemname
wynn.fetchItem(item)
.then(res => {
    // Code to display result
})
.catch(err => {
    console.log(err);
});

```
#### fetchGuild
This will return the guild object from the guild name you input (This does not work with guild prefixes).
```JS
let guild = // code to get guild
wynn.fetchGuild(guild)
.then(res => {
    // Code to display result
})
.catch(err => {
    console.log(err);
});
```

#### fetchServers
This will return all servers on the network.
```JS
wynn.fetchServers()
.then(res => {
    // Code to display result
})
.catch(err => {
    console.log(err);
});
```

#### fetchTerritories
This will return all the territories.
```JS
wynn.fetchTerritories()
.then(res => {
    // Code to display result
})
.catch(err => {
    console.log(err);
});
```
#### fetchGuildLeaderboard
This will return the top 100 guilds.
Definiton of `timeframe`: this can be alltime
```JS
wynn.fetchGuildLeaderboard(timeframe)
.then(res => {
    // Code to display result
})
.catch(err => {
    console.log(err);
});
```
#### fetchPlayerLeaderboard
This will return the top 100 guilds.
Definiton of `timeframe`: this can be alltime
```JS
wynn.fetchPlayerLeaderboard(timeframe)
.then(res => {
    // Code to display result
})
.catch(err => {
    console.log(err);
});
```
#### fetchPvPLeaderboard
This will return the top 100 guilds.
Definiton of `timeframe`: this can be alltime
```JS
wynn.fetchPvPLeaderboard(timeframe)
.then(res => {
    // Code to display result
})
.catch(err => {
    console.log(err);
});
```

#### search
This will return a list of guild and player names which contain the search query, this is case-insensitive.
```JS
wynn.search(name)
.then(res => {
    // Code to display result
})
.catch(err => {
    console.log(err);
});
```
### Version2

#### fetchPlayer
This will return the player object from the username you input.
```JS
let username = // code to get username
wynn.fetchPlayer(username)
.then(res => {
    // Code to display result
})
.catch(err => {
    console.log(err);
});

```
#### fetchIngredient
This will return the ingredient object from the ingredient name you input.
```JS
let ingredient = // code to get ingredient
wynn.fetchIngredient(ingredient)
.then(res => {
    // Code to display result
})
.catch(err => {
    console.log(err);
});
```

