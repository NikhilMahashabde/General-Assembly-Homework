from flask import Flask

class ChilliMap:
    def __init__(self):
        self.scoville_map = {
            100: "Bell pepper",
            1000: "Banana pepper",
            2500: "Anaheim pepper",
            10000: "Jalapeño pepper",
            25000: "Serrano pepper",
            50000: "Cayenne pepper",
            100000: "Bird's eye chili",	
            350000: "Habanero chili",
            750000:	"Red savina habanero",
            1500000: "Ghost pepper",
            3000000: "Pepper spray",
        }
    
    def getChillInfo(self,scoville ):
        for item in sorted(self.scoville_map):
            if int(scoville) < item:
                return self.scoville_map[item]

app = Flask(__name__)
chilli = ChilliMap()

@app.route("/<scoville>")
def returnChilli(scoville):
    return chilli.getChillInfo(scoville)

if __name__ == "__main__":
    app.run(debug=True)