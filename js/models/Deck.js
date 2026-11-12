import { Card } from "./Card.js";

export class Deck {
    constructor() {
        this.cards = [];
    }

    buildDeck() {
        this.suits = ["hearts", "clubs", "spades", "diamonds"];
        this.names = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
        
        for(const suit of this.suits) {
            for(const name of this.names) {
                const value = this.names.indexOf(name) + 2;
                const card = new Card(suit, name, value);

                this.cards.push(card);
            }
        }
    }

    shuffle() {
        for(let i = this.cards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          
          const temp = this.cards[i];
          this.cards[i] = this.cards[j];
          this.cards[j] = temp;
        }
    }

    drawCard() {
        const card = this.cards.pop();
        return card;
    }
}