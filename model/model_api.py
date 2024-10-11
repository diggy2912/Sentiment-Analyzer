from transformers import pipeline
from flask import Flask, request, jsonify
pipe = pipeline("text-classification", model="swaraj150/improved_finetuned_model")


app = Flask(__name__)
@app.route('/classify', methods=['POST'])
def classify_text():
    try:
        data = request.json
        text = data.get('text', '')
        if not text:
            return jsonify({'error': 'No text provided'}), 400
        result = pipe(text)
        score = result[0]['score']
        sentiment = 'negative' if score < 0.5 else 'positive' if score > 0.5 else "neutral"
        return jsonify({'label': sentiment,'score': score}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)