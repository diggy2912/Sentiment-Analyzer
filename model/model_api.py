from transformers import pipeline
from flask import Flask, request, jsonify
from flask_cors import CORS
pipe = pipeline("text-classification", model="swaraj150/improved_finetuned_model")
# from confluent_kafka import Producer
# producer = Producer({'bootstrap.servers': 'localhost:9092'})
app = Flask(__name__)
CORS(app)  
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

@app.route('/fetch-tweet', methods=['POST'])
def fetch_tweet():
    data = request.json
    tweet_text = data.get('tweetText', None)
    
    if tweet_text:
        print(f'Received tweet text: {tweet_text}')  
        # producer.produce('tweet_topic', value=tweet_text)
        # producer.flush()
        return jsonify({
            'status': 'success',
            'tweetText': tweet_text
        }), 200
    else:
        return jsonify({
            'status': 'error',
            'message': 'No tweet text provided'
        }), 400

if __name__ == '__main__':
    app.run(debug=True)