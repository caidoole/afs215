class CheckOut:
    def __init__(self, name):
        self.name = name
        self.items = {}
        self.item_prices = {}
        self.discount = {}
        self.discountRules = {}

    def add_item(self, item):
        if item in self.item_prices:
            if item in self.items:
                self.items[item] += 1
            else:
                self.items[item] = 1
            return self.items[item]
        else:
            raise Exception("Item not in inventory")

    def add_item_price(self, item, price):
        self.item_prices[item] = price

    def calculate_current_total(self):
        current_total = 0
        for item, number in self.items.items():
            current_total += (self.item_prices[item] * self.items[item])
            if item in self.discount:
                if self.items[item] >= self.discountRules[item]:
                    current_total -= self.discount[item]
        return current_total

    def add_discount(self, item, discount, number):
        self.discountRules[item] = number
        self.discount[item] = discount
        return self.discount[item]
