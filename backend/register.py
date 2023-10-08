from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017/") 
db = client["pickup"]
users_collection = db["users"]

@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()

 
    existing_user = users_collection.find_one({"email": data["email"]})
    if existing_user:
        return jsonify({"message": "Email already registered"}), 400

    user_data = {
        "Username": data["Username"],
        "email": data["email"],
        "password": data["password"], 
        "location": data["location"]

    }

   
    result = users_collection.insert_one(user_data)

    return jsonify({"message": "User registered successfully", "user_id": str(result.inserted_id)}), 201

if __name__ == "__main__":
    app.run(debug=True)
