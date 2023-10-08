from flask import Flask, request, jsonify 
from pymango import MongoClient

app = flask (__name__)

client = MongoClient("mongodb://localhost:27017/")
db = client["PickUp"]
games_collection = db["games"]

@app.route("/create_game", methods =["POST"])
def create_game():
    data = request.get.json()
    location = data.get("location","")
    #player_skills = data["player_skills"]
    difficulty = data["difficulty"]
    time = data["time"]
   #duration = data["duration"]
    is_public = data["is_public"]
    creator_id = data["creator_id"]

    #average_skill = sum(player_skills)/ len(player_skills)

    game_data = {
        "location": location,
        "difficulty": difficulty,
        "time": time,
    #    "duration": duration,
        "is_public": is_public,
        "creator_id": creator_id,
    }

    result = games_collection.insert_one(game_data)

    return jsonify({"message": "Game created successfully", "game_id": str(result.inserted_id)}), 201

if __name__ == "__main__":
    app.run(debug=True)