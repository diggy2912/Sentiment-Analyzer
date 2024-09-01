console.log('content.js injected successfully')

const getTweetText = () => {
  tweetElement = document.querySelector('[data-testid="tweetText"]')
  const tweetText = tweetElement ? tweetElement.innerText : 'Tweet text not found!'
  return tweetText
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getTweetText') {
    const tweetText = getTweetText()
    sendResponse({ tweetText })
  }
})