

// Cart Class

export default class Cart {
    constructor(item) {
        this.item = item;
    }

    getQuantity() {
        this.item.qty = parseInt(document.querySelector('.detail__qty').value);
    }

    getSauce() {
        this.item.sauce = document.querySelector('.detail__choice').value;
    }
}