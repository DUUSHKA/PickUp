from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="password",
    database="database",
)

print("Hello")

@app.route('/api/create_game', methods=['POST'])
def create_game():
    data = request.json
    cursor = db.cursor()

    cursor.execute("""
        INSERT INTO pickup (game_name, location, game_type, is_public, passsword)
        VALUES (%s, %s, %s, %s, %s)
    """, (
        data['game_name'],
        data['location'],
        data['game_type'],
        data['public'] == 'True',
        data.get('passsword', None)
    ))

    db.commit()
    cursor.close()
    return jsonify({"message": "Game created successfully"})

if __name__ == '__main__':
    app.run(debug=True,port =5000)