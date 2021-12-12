import pytest
from supermarket import CheckOut


@pytest.fixture
def checkout():
    checkout = CheckOut("Caitlin")
    checkout.add_item_price("Dog Food", 10)
    checkout.add_item_price("Pickles", 2.50)
    checkout.add_item_price("Milk", 3.50)
    return checkout


def test_add_item(checkout):
    checkout.add_item("Dog Food")


def test_add_multiple_items(checkout):
    checkout.add_item("Dog Food")
    assert checkout.calculate_current_total() == 10
    checkout.add_item("Pickles")
    assert checkout.calculate_current_total() == 12.50
    checkout.add_item("Milk")
    assert checkout.calculate_current_total() == 16.00


def test_add_discount(checkout):
    checkout.add_item("Dog Food")
    assert checkout.calculate_current_total() == 10
    checkout.add_discount("Dog Food", 3)
    assert checkout.calculate_current_total() == 7


def test_missing_price_exception(checkout):
    with pytest.raises(Exception):
        checkout.add_item("Cat Food")
