from functools import reduce

lost_boys = [
  {"name": "Tootles", "age": "11"},
  {"name": "Nibs", "age": "9"},
  {"name": "Slightly", "age": "10"},
  {"name": "Curly", "age": "8"},
  {"name": "The Twins", "age": "9"}
]

# Find the total age of all the lost boys

print( reduce(lambda total, boy: int(boy["age"])+total, lost_boys, 0))

# Extension: Find the average age of the lost boys
print(reduce(lambda avg, boy: int(boy["age"])/len(lost_boys)+avg, lost_boys, 0))
