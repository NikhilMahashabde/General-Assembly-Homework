# TODO: something to import? :)
import psycopg2

# TODO: connect to the database
connection = psycopg2.connect(dbname="nba_db", user="postgres", password="NsmNz9226")


# TODO: get a cursor
cursor = connection.cursor()

#The name and points for all the players from that team

teamName = input("Select team name").upper()

cursor.execute("""
SELECT *
FROM players
WHERE team = %s;

""", [teamName])

output = cursor.fetchall()
print(f"All players in {teamName}")
for item in output:
    print(item)

#The total number of players in the team

print (f"Total number of players : {len(output)}")

#The average points for that team
cursor.execute("""
SELECT *, CAST(points AS FLOAT)/games
FROM players
WHERE team = %s
order by CAST(points as FLOAT)/games;
""", [teamName])

output = cursor.fetchall()
print(f"All players in {teamName}")
for item in output:
    print(item)

#The youngest age on the team

cursor.execute("""
SELECT *
FROM players
WHERE team = %s
order by age
limit 1;
""", [teamName])

output = cursor.fetchall()
print(f"All players in {teamName}")
for item in output:
    print(item)

#The highest points on the team

cursor.execute("""
SELECT *
FROM players
WHERE team = %s
order by points desc
limit 1;
""", [teamName])

output = cursor.fetchall()
print(f"All players in {teamName}")
for item in output:
    print(item)


#The name and team of the players with the top 20 average points per game


cursor.execute("""
SELECT *, CAST(points AS FLOAT)/games
FROM players
order by CAST(points AS FLOAT)/games desc
limit 20;
""",)

output = cursor.fetchall()
print(f"TOP PLAYERS IN LEAGUE")
for item in output:
    print(item)



# this creates the table with the correct columns
# cursor.execute(
#     """CREATE TABLE players (
#         id serial PRIMARY KEY,
#         name varchar(50) NOT NULL,
#         age integer NOT NULL,
#         team varchar(50),
#         games integer NOT NULL,
#         points integer NOT NULL
#     );"""
# )

# # open .csv file and reads data into variables
# for line in open('nba_data.csv'):
#     # strip leading and trailing whitespaces and get each comma separated value as a list
#     player_data = line.strip().split(',')

#     # get all the data for each player and store as variables
#     # note the conversion to the correct data types
#     name = player_data[0]
#     age = int(player_data[1])
#     team = player_data[2]
#     games = int(player_data[3])
#     points = int(player_data[4])

#     # TODO: insert data into database
#     cursor.execute("INSERT INTO players(name, age, team, games, points) VALUES (%s, %s, %s, %s, %s)", [name, age, team, games, points])


# TODO: commit the SQL commands
connection.commit()

# TODO: close the connection
connection.close()