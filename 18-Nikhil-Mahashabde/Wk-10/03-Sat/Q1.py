data = {
  "town": {
    "residents": ["Maurice", "Belle", "Gaston"],
    "castle": {
      "num_rooms": 47,
      "residents": [
        {
          "name": "Robby Benson",
          "year_of_birth": 1956
        }
      ],
      "guests": ["birds"]
    }
  }
}

# 1. Print the number of rooms in the castle

print("Print the number of rooms in the castle:")
print(data["town"]["castle"]["num_rooms"])

# 2. Add "Belle" to the beginning of the guests list

data["town"]["castle"]["guests"].insert(0, "belle")
print(data["town"]["castle"]["guests"])

# 3. Print Robby's birth year

print(data["town"]["castle"]["residents"][0]["year_of_birth"])

# 4. Add a new key-value pair to the castle to make "Mrs Potts" the cook
data["town"]["castle"]["cook"] = "Mrs Potts"

print(data["town"]["castle"])


# Extension: Write helper functions for tasks 2, 3, and 4
# so that they can be called with different arguments