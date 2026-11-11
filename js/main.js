import { Card } from "./models/Card.js";
import { Deck } from "./models/Deck.js";

console.log("main.js is connected!");

const myCard = new Card(`Hearts`, `King`, 13);
const myDeck = new Deck();

console.log(myCard);
console.log(myDeck);

myDeck.buildDeck();
console.table(myDeck.cards);
myDeck.shuffle();
console.table(myDeck.cards);