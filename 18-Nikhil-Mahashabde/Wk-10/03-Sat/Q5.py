# Write a function scream that has the following behaviour:
# scream(0) -> "*crickets*"
# scream(1) -> "argh!"
# scream(2) -> "arghh!"
# scream(5) -> "arghhhhh!"
# etc.

# Extension: add an extra optional argument to allow the user to scream in uppercase

# Extension 2: add another optional argument to allow the user to define their own scream
# E.g. scream(5, "no") gives "nooooo!"
def scream(length:int, up:bool=False, scr:str = "arg") -> str:

    if not length:
        return "*crickets*"
    else:
        return (scr+"h"*length + "!" if (not up) else (scr+"h"*length + "!").upper())

print(scream(50, True, "laa"))