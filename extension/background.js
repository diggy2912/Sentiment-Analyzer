chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'analyzeSentiment') {
    const sentiments = ['positive', 'negative', 'neutral']
    const randomIndex = Math.floor(Math.random() * sentiments.length)
    sendResponse({ sentiment: sentiments[randomIndex] })
  }
})