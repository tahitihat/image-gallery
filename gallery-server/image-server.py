import os
from flask import Flask, jsonify, send_file
from flask_cors import CORS

IMAGE_DIR = "tree-assets"

# Initialize Flask app
app = Flask(__name__)
CORS(app)


@app.route("/api/get_photo/<filename>", methods=["GET"])
def get_photo(filename):
    full_path = os.path.join(IMAGE_DIR, filename)
    if os.path.exists(full_path):
        return send_file(full_path, mimetype="image/jpeg")
    else:
        return "Image not found", 404


@app.route("/api/get_photos", methods=["GET"])
def get_photos():
    image_paths = []

    for image_file in os.listdir(IMAGE_DIR):
        image_paths.append(image_file)

    return jsonify({"paths": image_paths})


if __name__ == "__main__":
    app.run()
