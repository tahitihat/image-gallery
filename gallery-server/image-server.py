from flask import Flask, send_file

IMAGE_DIR = "tree-assets"

# Initialize Flask app
app = Flask(__name__)


# Basic Flask endpoint
@app.route("/api/get_photo")
def get_photos():
    image = f"{IMAGE_DIR}/tree-with-white-background.jpg"
    return send_file(image, mimetype="image/png")


if __name__ == "__main__":
    app.run(debug=True)  # **REMOVE
