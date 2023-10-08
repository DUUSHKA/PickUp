from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="nbp-90-233.nbp.ruw.rutgers.edu",
    user="root",
    password="password",
    database="pickup",
)

@app.route('/api/create_game', methods=['POST'])
def create_game():
    data = request.json
    cursor = db.cursor()

    cursor.execute("""
        INSERT INTO games (game_name, location, game_type, is_public, password)
        VALUES (%s, %s, %s, %s, %s, %s)
    """, (
        data['game'],
        data['location'],
        data['game_type'],
        data['public'] == 'True',
        data.get('password', None)
    ))

    db.commit()
    cursor.close()
    return jsonify({"message": "Game created successfully"})

if __name__ == '__main__':
    app.run(debug=True)