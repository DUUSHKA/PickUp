from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017/")  
db = client["pickup"]
games_collection = db["games"]

@app.route("/view_games", methods=["GET"])
def view_games():
    available_games = list(games_collection.find({"public":True}))
    for game in available_games:
        game.pop("players",None)
        game.pop("creator_id",None)

    return jsonify(available_games),200

if __name__ == "main":
    app.run(debug =True)
