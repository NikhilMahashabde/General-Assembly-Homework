# TODO: something to import? :)
import psycopg2

# TODO: connect to the database
connection = psycopg2.connect(dbname="nba_db", user="postgres", password="NsmNz9226")


# TODO: get a cursor
cursor = connection.cursor()

# this creates the table with the correct columns
cursor.execute(
    """CREATE TABLE players (
        id serial PRIMARY KEY,
        name varchar(50) NOT NULL,
        age integer NOT NULL,
        team varchar(50),
        games integer NOT NULL,
        points integer NOT NULL
    );"""
)

# open .csv file and reads data into variables
for line in open('nba_data.csv'):
    # strip leading and trailing whitespaces and get each comma separated value as a list
    player_data = line.strip().split(',')

    # get all the data for each player and store as variables
    # note the conversion to the correct data types
    name = player_data[0]
    age = int(player_data[1])
    team = player_data[2]
    games = int(player_data[3])
    points = int(player_data[4])

    # TODO: insert data into database
    cursor.execute("INSERT INTO players(name, age, team, games, points) VALUES (%s, %s, %s, %s, %s)", [name, age, team, games, points])


# TODO: commit the SQL commands
connection.commit()

# TODO: close the connection
connection.close()