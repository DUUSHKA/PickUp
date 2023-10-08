from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017/") 
db = client["pickup"]
users_collection = db["users"]

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    user = users_collection.find_one({"email": data["email"]})

    if not user:
        return jsonify({"message":"User not found"}),404
    
    if user ["password"] != data["password"]:
        return jsonify({"message":"Incorrect passowrd"}),404
    
    return jsonify({"message":"Login Successful", "user_id": str(user["_id"])}),200

if __name__ == "__main__":
    app.run(debug=True  )