from flask import Flask, jsonify, request
from bson.objectid import ObjectId
from pymongo import MongoClient
from dotenv import load_dotenv
import os

app = Flask(__name__)

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



if __name__ == '__main__':
    app.run(debug=True)
