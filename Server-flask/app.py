from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/sum', methods=['POST'])
def sum_numbers():
    data = request.get_json()
    a = data.get('a', 0)
    b = data.get('b', 0)
    return jsonify({'sum': a + b})

@app.route('/api/diff', methods=['POST'])
def diff_numbers():
    data = request.get_json()
    a = data.get('a', 0)
    b = data.get('b', 0)
    return jsonify({'diff': a - b})

@app.route('/api/mul', methods=['POST'])
def mul_numbers():
    data = request.get_json()
    a = data.get('a', 0)
    b = data.get('b', 0)
    return jsonify({'mul': a * b})

if __name__ == '__main__':
    app.run(port=5000)
