'use strict';
// Trader - Hands free trading for Crossing

/*
 * Concept:
 *
 *   Go to closest clerk
 *
 *   Turn in contracts
 *
 *   Determine new destination
 *
 *   En route to new destination, practice
 *
 *   Repeat
 */


const Location = {
    Arthe: 'Arthe Dale, Cul-de-sac',
    NRFerry: 'North Road, Ferry',
    NRCaravansary: 'North Roads Caravansary',
    STR: 'Southern Trade Route, Outside Leth Deriel',
}

const locations = [
    Location.Arthe,
    Location.NRFerry,
    Location.NRCaravansary,
    Location.STR,
];

function main() {
    let running = true;

    let location = findLocation();

    client.echo("found location")

    while (running) {
        stowHands();

        client.echo("looping");

        pause(3);
    }

    exit();

    client.echo("after exit");
}

function findLocation() {
    const matcher = new MatchList();
    for (let location of Object.values(Location)) {
        matcher.addMatch(location, location)
    }
    matcher.addMatch('obvious', null);
    matcher.addMatch('[You\'re', 'dead');
    client.put("look");
    return matcher.wait();
}

function stowHands() {
    stow('left');
    stow('right');
}

function stow(hand) {
    const matcher = new MatchList();
    matcher.addMatch('You really should close your ledger', 'ledger');
    matcher.addMatch('You put');
    matcher.addMatch('Stow what?');
    client.put('stow ' + hand);
    const result = matcher.wait();
    if (result == 'ledger') {
        client.put('close my ledger');
        stow(hand);
    }
}

main();

