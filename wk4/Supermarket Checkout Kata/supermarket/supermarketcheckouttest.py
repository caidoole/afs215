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
    assert checkout.add_item("Dog Food") == 1
    assert checkout.add_item("Dog Food") == 2


def test_add_multiple_items(checkout):
    assert checkout.add_item("Dog Food") == 1
    assert checkout.add_item("Dog Food") == 2
    assert checkout.calculate_current_total() == 20
    assert checkout.add_item("Pickles") == 1
    assert checkout.calculate_current_total() == 22.50
    assert checkout.add_item("Milk") == 1
    assert checkout.calculate_current_total() == 26.00


def test_add_discount(checkout):
    assert checkout.add_item("Dog Food") == 1
    assert checkout.add_item("Dog Food") == 2
    assert checkout.add_item("Dog Food") == 3
    assert checkout.calculate_current_total() == 30.00
    assert checkout.add_discount("Dog Food", 10.00, 3) == 10.00
    assert checkout.calculate_current_total() == 20.00


def test_missing_price_exception(checkout):
    with pytest.raises(Exception):
        checkout.add_item("Cat Food")
