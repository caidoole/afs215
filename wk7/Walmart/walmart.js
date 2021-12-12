class Checkout {
    
    constructor(){
        this.items = new Set();
        this.prices = new Map();
        this.discounts = new Map();
    }

    addItem(item) {
        if(this.prices.has(item)) {
            this.items.add(item);
            return this.items.has(item);
        } else {
            throw new Error('Item not in inventory');
        }
    }

    addItemPrice(item, price) {
        this.prices.set(item, price);
        return this.prices.get(item);
    }

    calculateCurrentTotal() {
        let currentTotal = 0;
        let currentDiscounts = new Map(this.discounts);
        this.prices.forEach(function(value, key){
            currentTotal += value;
            if(currentDiscounts.has(key)){
                currentTotal -= value;
            }     
        })
        return currentTotal;
    }

    addDiscount(item, discount){
        this.discounts.set(item, discount);
        return this.discounts.get(item);
    }


}

module.exports = Checkout;