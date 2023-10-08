from flask import Flask, request, jsonify
from pymongo import MongoClient 
from bson.objectid import ObjectId

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017/") 
db = client["pickup"]
users_collection = db["users"]

def update_profile(user_id):
    data = request.get_json()

    user = users_collection.find_one({"_id": ObjectId(user_id)})

    if not user:
        return jsonify({"message": "User not found"}), 404 

    user["skill_level"] = data.get("skill_level", user.get("skill_level", ""))
    #user["city"] = data.get("city", user.get("city", ""))
    #user["profile_picture"] = data.get("profile_picture", user.get("profile_picture", ""))
    user["bio"] = data.get("bio", user.get("bio", ""))

    users_collection.update_one({"_id": ObjectId(user_id)}, {"$set": user})

    return jsonify({"message": "Profile updated successfully"}), 200

if __name__ == "__main__":
    app.run(debug=True)

