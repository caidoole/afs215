const FizzBuzz = (value) => {
    if(value==1) return value;
    if(value==2) return value;
    if(value==3) return "Fizz";
    if(value==5) return "Buzz";
    if(value%3 == 0 && value%5 != 0)
        return "Fizz"
    if(value%5 == 0 && value%3 != 0)
        return "Buzz"
    if(value%5 == 0 && value%3 == 0)
        return "FizzBuzz"
}

exports.FizzBuzz = FizzBuzz;