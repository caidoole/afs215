class CheckOut:
    def __init__(self, name):
        self.name = name
        self.items = {}
        self.item_prices = {}
        self.discount = {}

    def add_item(self, item):
        if item in self.item_prices:
            self.items[item] = item
        else:
            raise Exception("Item not in inventory")

    def add_item_price(self, item, price):
        self.item_prices[item] = price

    def calculate_current_total(self):
        current_total = 0
        for item, number in self.items.items():
            current_total += self.item_prices[item]
            if item in self.discount:
                current_total -= self.discount[item]
        return current_total

    def add_discount(self, item, discount):
        self.discount[item] = discount
