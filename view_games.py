from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="host",
    user="root",
    password="root",
    database="pickup"
)

@app.route('/api/games', methods=['GET'])
def get_games():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM games")
    games = cursor.fetchall()
    cursor.close()
    return jsonify(games)

if __name__ == '__main__':
    app.run(debug=True)
