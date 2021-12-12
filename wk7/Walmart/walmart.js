class Checkout {
    
    constructor(){
        this.items = new Map();
        this.prices = new Map();
        this.discounts = new Map();
        this.discountRules = new Map();
    }

    addItem(item) {
        if(this.prices.has(item)) {
            if(this.items.has(item)){
                let quantity = this.items.get(item);
                quantity += 1;
                this.items.set(item, quantity);
            } else {
                this.items.set(item, 1);
            } 
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
        let currentItems = new Map(this.items);
        let currentRules = new Map(this.discountRules);

        this.prices.forEach(function(value, key){
            currentTotal += value * currentItems.get(key);
            if(currentDiscounts.has(key)){
                if(currentItems.get(key) >= currentRules.get(key)) {
                    currentTotal -= currentDiscounts.get(key);
                } 
            }     
        })
        return currentTotal;
    }

    addDiscount(item, discount, number){
        this.discountRules.set(item, number);
        this.discounts.set(item, discount);
        return this.discounts.get(item);
    }


}

module.exports = Checkout;