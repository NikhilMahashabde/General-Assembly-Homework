import random

max_number = int(input("Enter max value \n"))
randomNumber = random.randint(0,max_number)
print(randomNumber)
guess = -1

while guess != randomNumber:
    guess=int(input("Guess the number \n"))

    if guess>randomNumber:
        print("Wrong,guess lower!")
    elif guess<randomNumber:
        print("Wrong, Higher")


print(f"Congrats you win, number was : {randomNumber}")