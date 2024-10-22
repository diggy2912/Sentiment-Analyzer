chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'analyzeSentiment') {
    fetch('http://127.0.0.1:5000/classify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text:  message.text})
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        sendResponse({ sentiment: data.label })
      })
      .catch((error) => {
        console.log(error)
        sendResponse({ error: error });
      });

    // const sentiments = ['positive', 'negative', 'neutral']
    // const randomIndex = Math.floor(Math.random() * sentiments.length)
    // sendResponse({ sentiment: sentiments[randomIndex] })
    return true
  }
})