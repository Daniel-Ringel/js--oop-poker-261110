export class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  getHandValue() {
    let total = 0;
    for (const card of this.hand) {
      total += card.value;
    }
    return total;
  }

  discardCard() {
    const takeLastCard = this.hand.pop();
    return takeLastCard;
  }

  drawCards(deck, amount) {
    for (let i = 0; i < amount; i++) {
      const card = deck.drawCard();
      this.hand.push(card);
    }
  }

  discardCards(pile, amount) {
    for (let i = 0; i < amount; i++) {
      const card = this.discardCard();
      pile.push(card);
    }
  }
}