const expect = require('chai').expect;
const fizz = require('../Fizzbuzzkata');

it('can call FizzBuzz', function(){
    fizz.FizzBuzz(1);
})

it('expects 1 when 1 is passed in', function(){
    expect(fizz.FizzBuzz(1)).to.equal(1);
})

it('expects 2 when 2 is passed in', function(){
    expect(fizz.FizzBuzz(2)).to.equal(2);
})

it('expects Fizz when 3 is passed in', function(){
    expect(fizz.FizzBuzz(3)).to.equal("Fizz");
})

it('expects Buzz when 5 is passed in', function(){
    expect(fizz.FizzBuzz(5)).to.equal("Buzz");
})

it('expects Fizz when 6 is passed in', function(){
    expect(fizz.FizzBuzz(6)).to.equal("Fizz");
})

it('expects Buzz when 10 is passed in', function(){
    expect(fizz.FizzBuzz(10)).to.equal("Buzz");
})

it('expects FizzBuzz when 15 is passed in', function(){
    expect(fizz.FizzBuzz(15)).to.equal("FizzBuzz");
})

it('expects FizzBuzz when 30 is passed in', function(){
    expect(fizz.FizzBuzz(30)).to.equal("FizzBuzz");
})