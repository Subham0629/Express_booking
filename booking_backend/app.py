from flask import Flask, jsonify, request
from bson.objectid import ObjectId
from bson import ObjectId, json_util

from pymongo import MongoClient
from dotenv import load_dotenv
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
# Load environment variables from .env file
load_dotenv()

# Connect to MongoDB
mongo_url = os.environ.get("mongoUrl")
client = MongoClient(mongo_url)
db = client["Express_booking"]  

# User Endpoints


# Get all users
@app.route('/users', methods=['GET'])
def get_users():
    users = list(db.users.find())
    for user in users:
        user['_id'] = str(user['_id'])
    return jsonify(users)

# Get a user by ID
@app.route('/users/<string:user_id>', methods=['GET'])
def get_user(user_id):
    user = db.users.find_one({"_id": ObjectId(user_id)})
    if user:
        user['_id'] = str(user['_id'])
        return jsonify(user)
    else:
        return jsonify({"message": "User not found"}), 404

# Create a new user
@app.route('/users', methods=['POST'])
def create_user():
    user_data = request.get_json()
    email = user_data.get('email')

    # Check if email already exists
    existing_user = db.users.find_one({"email": email})
    if existing_user:
        return jsonify({"message": "User already exists with this email"}), 400

    result = db.users.insert_one(user_data)
    return jsonify({"message": "User created successfully", "user_id": str(result.inserted_id)}), 201

@app.route('/login_user', methods=['POST'])
def login():
    user_data = request.get_json()
    email = user_data.get('email')
    password = user_data.get('password')

    if not email or not password:
        return jsonify({'message': 'Email and password are required!'})

    user = db.users.find_one({'email': email, 'password': password})
    if not user:
        return jsonify({'message': 'Invalid credentials!'})

    return jsonify({'message': 'Login successful!', "user_id": str(user['_id'])})

# Update a user by ID
@app.route('/users/<string:user_id>', methods=['PUT'])
def update_user(user_id):
    updated_data = request.get_json()
    result = db.users.update_one({"_id": ObjectId(user_id)}, {"$set": updated_data})
    if result.matched_count > 0:
        return jsonify({"message": "User updated successfully"})
    else:
        return jsonify({"message": "User not found"}), 404

# Delete a user by ID
@app.route('/users/<string:user_id>', methods=['DELETE'])
def delete_user(user_id):
    result = db.users.delete_one({"_id": ObjectId(user_id)})
    if result.deleted_count > 0:
        return jsonify({"message": "User deleted successfully"})
    else:
        return jsonify({"message": "User not found"}), 404


# //********************Movies and show management****************//

@app.route('/movies', methods=['GET'])
def get_all_movies():
    movies = list(db["movies"].find())
    # Convert ObjectId to a serializable format
    for movie in movies:
        movie['_id'] = str(movie['_id'])
    return json_util.dumps(movies), 200

@app.route('/movies/<string:movie_id>', methods=['GET'])
def get_movie(movie_id):
    movie = db["movies"].find_one({"_id": ObjectId(movie_id)})
    if movie:
        movie['_id'] = str(movie['_id'])
        return jsonify(movie), 200
    else:
        return jsonify({"message": "Movie not found"}), 404

@app.route('/movies', methods=['POST'])
def add_movie():
    data = request.json
    title = data.get('title')
    imageurl = data.get('imageurl')
    city = data.get('city')
    language = data.get('language')

    # Insert the new movie into the 'movies' collection
    movie_data = {
        "title": title,
        "imageurl": imageurl,
        "city": city,
        "language": language
    }
    movie_id = db["movies"].insert_one(movie_data).inserted_id

    return jsonify({"message": "Movie added successfully", "movie_id": str(movie_id)}), 201

@app.route('/movies/<string:movie_id>', methods=['PUT'])
def update_movie(movie_id):
    data = request.json
    title = data.get('title')
    imageurl = data.get('imageurl')
    city = data.get('city')
    language = data.get('language')

    # Update the movie in the 'movies' collection
    result = db["movies"].update_one({"_id": movie_id}, {"$set": {
        "title": title,
        "imageurl": imageurl,
        "city": city,
        "language": language
    }})

    if result.modified_count == 1:
        return jsonify({"message": "Movie updated successfully"}), 200
    else:
        return jsonify({"message": "Movie not found"}), 404

@app.route('/movies/<string:movie_id>', methods=['DELETE'])
def delete_movie(movie_id):
    # Delete the movie from the 'movies' collection
    result = db["movies"].delete_one({"_id": ObjectId(movie_id)})

    if result.deleted_count == 1:
        return jsonify({"message": "Movie deleted successfully"}), 200
    else:
        return jsonify({"message": "Movie not found"}), 404

@app.route('/shows', methods=['POST'])
def add_show():
    data = request.json
    movie_id = data.get('movie_id')
    timings = data.get('timings')
    category = data.get('category')

    # Assuming you have a 'shows' collection in your MongoDB database
    shows_collection = db["shows"]

    movie_id_obj = ObjectId(movie_id)
    # Check if the movie_id exists in the 'movies' collection
    movie = db["movies"].find_one({"_id": movie_id_obj})
    print("movie",movie)
    if not movie:
        return jsonify({"message": "Movie not found"}), 404

    # Insert the new show into the 'shows' collection
    show_data = {
        "movie_id": movie_id,
        "timings": timings,
        "category": category
    }
    show_id = shows_collection.insert_one(show_data).inserted_id

    return jsonify({"message": "Show added successfully", "show_id": str(show_id)}), 201

@app.route('/shows', methods=['GET'])
def get_all_shows():
    shows = list(db["shows"].find())
    # Convert ObjectId to a serializable format
    for show in shows:
        show['_id'] = str(show['_id'])
        show['movie_id'] = str(show['movie_id'])
    return json_util.dumps(shows), 200

@app.route('/shows/<string:show_id>', methods=['GET'])
def get_show(show_id):
    show = db["shows"].find_one({"_id": ObjectId(show_id)})
    if show:
        show['_id'] = str(show['_id'])
        show['movie_id'] = str(show['movie_id'])
        return jsonify(show), 200
    else:
        return jsonify({"message": "Show not found"}), 404


if __name__ == '__main__':
    app.run(debug=True)
