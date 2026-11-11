export class Player {
    constructor(name) {
        this.name = name; 
        this.hand = [];
    }

    getHandValue() {
        let total = 0;
        for(const card of this.hand) {
            total += card.value;
        }
        return total;
    }
}