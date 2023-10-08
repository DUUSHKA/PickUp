from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="password",
    database="database"
)

@app.route('/api/view_games', methods=['GET'])
def get_games():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM pickup")
    games = cursor.fetchall()
    cursor.close()
    return jsonify(games)

if __name__ == '__main__':
    app.run(debug=True, port = 5001)