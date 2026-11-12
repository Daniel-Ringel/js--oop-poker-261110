import { Card } from "./models/Card.js";
import { Deck } from "./models/Deck.js";
import { Player } from "./models/Player.js";

const myDeck = new Deck();
const slim = new Player(`Slim`);
const luke = new Player(`Luke`);

console.log("===== Del 1 =====");
myDeck.buildDeck();
console.table(myDeck.cards);
myDeck.shuffle();
console.table(myDeck.cards);

console.log("===== Del 2 =====");
console.log(slim, luke);
slim.drawCards(myDeck, 5);
luke.drawCards(myDeck, 5);

console.log(slim, luke);
console.table(myDeck.cards);
console.log(`Cards left in deck: ${myDeck.cards.length}`);
console.log(`Slim's hand value: ${slim.getHandValue()}`);
console.log(`Luke's hand value: ${luke.getHandValue()}`);

console.log("===== Del 3 =====");
const discardPile = [];

slim.discardCards(discardPile, 2);
luke.discardCards(discardPile, 2);

slim.drawCards(myDeck, 2);
luke.drawCards(myDeck, 2);

console.log(slim, luke);
console.table(myDeck.cards);
console.log(`Cards left in deck: ${myDeck.cards.length}`);
console.log(`Slim's hand value: ${slim.getHandValue()}`);
console.log(`Luke's hand value: ${luke.getHandValue()}`);

console.log("===== Del 4 =====");
slim.discardCards(discardPile, 5);
luke.discardCards(discardPile, 5);

while (discardPile.length > 0) {
    const card = discardPile.pop();
    myDeck.cards.push(card);
}

console.log(`Slim's cards: ${slim.hand.length}`);
console.log(`Luke's cards: ${luke.hand.length}`);
console.log(`Cards in discard pile: ${discardPile.length}`);
console.log(`Cards in deck: ${myDeck.cards.length}`);
myDeck.shuffle();
console.table(myDeck.cards);