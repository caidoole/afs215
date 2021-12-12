const expect = require('chai').expect;
const assert = require('assert');
const Checkout = require('../walmart');

describe('Walmart Checkout', function() {
    let checkout;
    before(function(){
        console.log('Before tests:  Create checkout');
        checkout = new Checkout();
    });
    it('missing price expection when add item', function(done){
        expect(() => checkout.addItem("Dog Food")).to.throw("Item not in inventory");
        done();
    });
    it('add item and price', function(done){
        expect(checkout.addItemPrice("Dog Food", 8)).to.equal(8.00);
        expect(checkout.addItem("Dog Food")).to.equal(true);
        done();
    });
    it('calculate current total', function(done){
        expect(checkout.calculateCurrentTotal()).to.equal(8.00);
        done();
    });
    it('add multiple items and calculate total', function(done){
        expect(checkout.addItemPrice("Pickles", 3.00)).to.equal(3.00);
        expect(checkout.addItemPrice("Milk", 5.00)).to.equal(5.00);
        expect(checkout.addItem("Pickles")).to.equal(true);
        expect(checkout.addItem("Milk")).to.equal(true);
        expect(checkout.calculateCurrentTotal()).to.equal(16.00);
        done();
    });
    it('add discount rule', function(done){
        expect(checkout.addItem("Dog Food")).to.equal(true);
        expect(checkout.addItem("Dog Food")).to.equal(true);
        expect(checkout.calculateCurrentTotal()).to.equal(32.00);
        expect(checkout.addDiscount("Dog Food", 8.00, 3)).to.equal(8.00);
        expect(checkout.calculateCurrentTotal()).to.equal(24.00);
        expect(checkout.addDiscount("Milk", 3.00, 2)).to.equal(3.00);
        expect(checkout.calculateCurrentTotal()).to.equal(24.00);
        expect(checkout.addItem("Milk")).to.equal(true);
        expect(checkout.addItem("Milk")).to.equal(true);
        expect(checkout.calculateCurrentTotal()).to.equal(31.00);
        done();
    });
  });