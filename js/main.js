import { Card } from "./models/Card.js";
import { Deck } from "./models/Deck.js";
import { Player } from "./models/Player.js";

const myDeck = new Deck();
const slim = new Player(`Slim`);
const luke = new Player(`Luke`);

// Del 1
myDeck.buildDeck();
console.table(myDeck.cards);
myDeck.shuffle();
console.table(myDeck.cards);

// Del 2
console.log(slim, luke);
for (let i = 0; i < 5; i++) {
  const slimCard = myDeck.drawCard();
  slim.hand.push(slimCard);

  const lukeCard = myDeck.drawCard();
  luke.hand.push(lukeCard);
}

console.log(slim, luke);
console.table(myDeck.cards);
console.log(myDeck.cards.length);
console.log(slim.getHandValue()); 
console.log(luke.getHandValue()); 