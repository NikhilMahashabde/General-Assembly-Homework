# Write a function to reverse the word of each sentence
# E.g. reverse_words("hello world") gives "olleh dlrow"

def rev(word):
    sum = []
    reversedString = ""
    words = word.split(' ')
    
    for word in words:
        reversedString += ''.join(word[::-1]) + " "

    return reversedString

print(rev("hello world!"))



# Extension: cater for punctuation
# E.g. reverse_words("hello, world!") gives "olleh, dlrow!"