from flask import Flask, render_template, redirect, request
import requests
import random

app = Flask(__name__)

@app.route('/')
def image_display_dog():

    obj = requests.get('https://dog.ceo/api/breeds/image/random').json()
    print(obj['message'])
    test = obj["message"]
    return render_template('home.html', imageOne = test)

    #return redirect(obj['message'])

@app.route('/search')
def result():
    breed = request.args.get('breed')
    breedList = requests.get(f'https://dog.ceo/api/breed/{breed}/images').json()
    print(len(breedList['message']))
    print(breedList)
    imgDraw = breedList['message'][random.randint(0,len(breedList['message']))]
    
    return render_template('/search.html', title = breed, imageDisp = imgDraw)

app.run(debug=True)