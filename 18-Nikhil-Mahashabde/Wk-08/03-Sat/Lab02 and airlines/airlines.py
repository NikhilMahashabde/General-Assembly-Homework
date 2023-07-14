from flask import Flask, request, render_template

app = Flask(__name__)

class Baggage:
    def __init__(self, height, width, length, weight) -> None:

        self.height = int(height)
        self.width = int(width)
        self.length = int(length)
        self.weight = int(weight)

    def carryOnBagAccepted(self):
        if (self.weight < 10 and self.width < 36 and self.length < 23 and self.height < 56):
            return True
        else:
            return False
       
@app.route('/')
def homepage():
    return render_template('airlines.html')

@app.route('/result')
def result():
    height = request.args.get('height')
    width = request.args.get('width')
    length = request.args.get('length')
    weight = request.args.get('weight')
    if not height or not width or not length or not weight:
        return render_template('airlinesResult.html', message='fail')
    else:
        newBag = Baggage(height, width, length, weight)
        return render_template('airlinesResult.html', message='success')

if __name__ == "__main__":
    app.run(debug=True)