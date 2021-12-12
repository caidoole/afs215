const expect = require('chai').expect;
const fizz = require('../Fizzbuzzkata');

it('can call FizzBuzz', function(){
    fizz.FizzBuzz(1);
})

it('expects return of value passed in', function(){
    expect(fizz.FizzBuzz(1)).to.equal(1);
    expect(fizz.FizzBuzz(2)).to.equal(2);
})