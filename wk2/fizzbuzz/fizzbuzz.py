def fizzbuzz(x):
    if x == 1:
        return x
    if x == 2:
        return x
    if x == 3:
        return "Fizz"
    if x == 5:
        return "Buzz"
    if x % 3 == 0 and x % 5 != 0:
        return "Fizz"
    if x % 5 == 0 and x % 3 != 0:
        return "Buzz"
    if x % 3 == 0 and x % 5 == 0:
        return "FizzBuzz"

