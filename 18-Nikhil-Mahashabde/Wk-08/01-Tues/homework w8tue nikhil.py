
def maxOfThree(a, b, c):
    if (a > b):
        if ( a > c):
            return a
        else: 
            return c
    else:
        if (b>c):
            return b
        else:
            return c
        
    
def reverse(str):
    reverse = ''
    for i in range(len(str),0, -1):
        reverse = reverse + str[i-1]

    return reverse
    

def palindrone(str):
    reverse = ''
    for i in range(len(str),0, -1):
        reverse = reverse + str[i-1]

    return (reverse == str)

print(maxOfThree(3,5,7))
print(reverse("hellaa"))
print(palindrone("alla"))

import os

while True:
    path = input("Enter Path")
    if path == "End":
        break
    else:
        fileList = os.listdir(path)
        for fileName in fileList:
            print(fileName)
        