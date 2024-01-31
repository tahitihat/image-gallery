import io
import os
from base64 import encodebytes

from PIL import Image
from flask import Flask, jsonify, send_file

IMAGE_DIR = "tree-assets"

# Initialize Flask app
app = Flask(__name__)


@app.route("/api/get_first_photo", methods=["GET"])
def get_first_photo():
    image = f"{IMAGE_DIR}/img1.jpg"
    return send_file(image, mimetype="image/jpeg")


@app.route("/api/get_photo/<filename>", methods=["GET"])
def get_photo(filename):
    full_path = os.path.join(IMAGE_DIR, filename)
    if os.path.exists(full_path):
        return send_file(full_path, mimetype="image/jpeg")
    else:
        return "Image not found", 404


def get_response_image(image_path):
    pil_img = Image.open(image_path, mode="r")
    byte_arr = io.BytesIO()
    pil_img.save(byte_arr, format="PNG")
    encoded_img = encodebytes(byte_arr.getvalue()).decode("ascii")
    return encoded_img


# Returns multi-image, encoded response stream
# https://stackoverflow.com/questions/64065587/how-to-return-multiple-images-with-flask
@app.route("/api/get_photos", methods=["GET"])
def get_photos():
    result = os.listdir(IMAGE_DIR)

    encoded_images = []
    for image_path in result:
        full_path = os.path.join(IMAGE_DIR, image_path)
        encoded_images.append(get_response_image(full_path))

    return jsonify({"result": encoded_images})


# Returns file paths — need subsequent requests for each photo
@app.route("/api2/get_images", methods=["GET"])
def get_photos2():
    image_paths = []

    for image_file in os.listdir(IMAGE_DIR):
        full_path = os.path.join(IMAGE_DIR, image_file)
        image_paths.append(full_path)

    return jsonify({"image_paths": image_paths})


if __name__ == "__main__":
    app.run()
