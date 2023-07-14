# import the module
import psycopg2

# connect to a database
connection = psycopg2.connect(dbname="bakery", user="postgres", password="NsmNz9226")
# you can pass in extra flags using
# connection = psycopg2.connect(dbname="bakery", user="postgres", port=5432)

# get a cursor object to execute SQL commands
cursor = connection.cursor()

# create table
cursor.execute(
    """CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name TEXT,
        age INTEGER
    );"""
)

# insert name 'Fred' with age 16 into the table
# the %s are placeholders for each variable in the array that gets passed as the second argument into the execute function
name = 'Fred'
age = 16
cursor.execute("INSERT INTO users(name, age) VALUES (%s, %s)", [name, age])

# get table rows
cursor.execute("SELECT * FROM users")
results = cursor.fetchall()
print(results)

# commit the SQL command(s) - you can read more about SQL transactions at https://www.postgresql.org/docs/current/tutorial-transactions.html, but the tl;dr is that by default psycopg2 opens the connection starting a 'transaction', where commands aren't committed, so that they can be rolled back if needed
connection.commit()

# close the connection to the database
connection.close()