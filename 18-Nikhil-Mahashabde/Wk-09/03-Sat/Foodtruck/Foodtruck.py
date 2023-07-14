# TODO: something to import? :)
import psycopg2

# TODO: connect to the database
connection = psycopg2.connect(dbname="food_truck", user="postgres", password="NsmNz9226")

# TODO: get a cursor
cursor = connection.cursor()

#The name and points for all the players from that team


# this creates the table with the correct columns
cursor.execute(
    """CREATE TABLE food (
        id serial PRIMARY KEY,
        name varchar(50) NULL,
        image_url varchar(50),
        price_in_cents integer NOT NULL
    );
    """
)

name = ["wallnut", "almond", "Peanut"]
price = [1.20, 3.56, 3.2]
image = ["asg", "afa", "aadf"]

for i in range(len(name)):
    cursor.execute("INSERT INTO food(id, name, image_url, price_in_cents) VALUES (%s, %s, %s, %s);", [i, name[i], image[i], price[i]])

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