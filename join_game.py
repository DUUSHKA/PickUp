@app.route('/api/join_game', methods=['POST'])
def join_game():
    data = request.json
    game_id = data.get('gameId')
    password = data.get('password')

    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM games WHERE id = %s", (game_id,))
    game = cursor.fetchone()

    if game:
        if game['password'] is None or game['password'] == password:
            return jsonify({"message": "Joined game successfully"})
        else:
            return jsonify({"error": "Incorrect password"}), 401
    else:
        return jsonify({"error": "Game not found"}), 404
