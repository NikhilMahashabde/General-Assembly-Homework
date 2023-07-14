
from flask import Flask, render_template, redirect, request
import requests
import random


app = Flask(__name__)

@app.route('/')
def return_api():
    search = input("Name of movie to search")
    apiRet = requests.get(f'http://www.omdbapi.com/?apikey=e0719cdc&t={search}').json()
    print(apiRet)

    return render_template('home.html')


@app.route('/movie')
def returnMovie():

    return "a"

app.run(debug=True)
