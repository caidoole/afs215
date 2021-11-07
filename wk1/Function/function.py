def divsor(number):
    sum = 0
    for x in range (1, number + 1):
        if(number%x == 0 and x != number):
            sum += x
    print(sum == number)

usernumber = input("Enter a number:  ")
divsor(int(usernumber))