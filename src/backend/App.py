from flask import Flask, request

app = Flask(__name__)

@app.route("/Flask", methods=["POST"])
def verificacion():
    a = request.json
    return "buuu"
