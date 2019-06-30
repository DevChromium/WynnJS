# WynnJS
A JavaScript wrapper for the official Wynncraft API, if you wish you may contribute to the wrapper.
This wrapper is a modification of https://github.com/FraWolf/wynncraft.js, all rights of the fetchPlayer and fetchItem goes to the author of wynncraft.js.

## Introduction
You only have a limited amount of API Calls per a certain period of time, this can differ per API endpoint. Please read more on the official documentation of the API. 
https://docs.wynncraft.com/

## Installation via Node Package Manager
```
npm i --save WynnJS
```



## Usage
### fetchPlayer
This will return the player object from the username you input.
```JS
const wynnJS = require("WynnJS");
const wynn = new WynnJS();

let username = // code to get username
wynn.fetchPlayer(username)
.then(res => {
    // Code to display result
})
.catch(err => {
    console.log(err);
});

```
### fetchItem
This will return the item object from the item name you input.
```JS
const wynnJS = require("WynnJS");
const wynn = new WynnJS();

let item = // code to get itemname
wynn.fetchItem(item)
.then(res => {
    // Code to display result
})
.catch(err => {
    console.log(err);
});

```

### fetchIngredient
This will return the ingredient object from the ingredient name you input.
```JS
const wynnJS = require("WynnJS");
const wynn = new WynnJS();

let ingredient = // code to get ingredient
wynn.fetchIngredient(ingredient)
.then(res => {
    // Code to display result
})
.catch(err => {
    console.log(err);
});
```

### fetchGuild
This will return the guild object from the guild name you input (This does not work with guild prefixes).
```JS
const wynnJS = require("WynnJS");
const wynn = new WynnJS();

let guild = // code to get guild
wynn.fetchGuild(guild)
.then(res => {
    // Code to display result
})
.catch(err => {
    console.log(err);
});
```

### fetchServers
This will return all servers on the network.
```JS
const wynnJS = require("WynnJS");
const wynn = new WynnJS();

wynn.fetchServers()
.then(res => {
    // Code to display result
})
.catch(err => {
    console.log(err);
});
```

### fetchTerritories
This will return all the territories.
```JS
const wynnJS = require("WynnJS");
const wynn = new WynnJS();

wynn.fetchTerritories()
.then(res => {
    // Code to display result
})
.catch(err => {
    console.log(err);
});
```

