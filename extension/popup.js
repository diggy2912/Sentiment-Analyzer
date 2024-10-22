const tweetText = document.getElementById('tweet-text')
const tweetTextHeader = document.getElementById('tweet-text-header')
const sentiment = document.getElementById('sentiment')
const extractTweetButton = document.getElementById('extract-tweet')
const getSentimentButton = document.getElementById('get-sentiment')

tweetText.style.display = 'none'
tweetTextHeader.style.display = 'none'
sentiment.style.display = 'none'
getSentimentButton.style.display = 'none'
let tweetTextContent=''
extractTweetButton.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'getTweetText' }, (response) => {
        tweetText.style.display = 'block'
        tweetTextHeader.style.display = 'block'

        if (response) {
          extractTweetButton.style.display = 'none'
          getSentimentButton.style.display = 'block'
          tweetText.innerText = response.tweetText
          tweetTextContent=response.tweetText          
        } else {
          tweetText.innerText = 'Failed to retrieve tweet text!'
        }
      })
    }
  })
})

getSentimentButton.addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'analyzeSentiment', text: tweetTextContent }, (response) => {
    getSentimentButton.style.display = 'none'
    sentiment.style.display = 'flex'
    tweetTextContent=''
    console.log(response)
    if (response && response.sentiment) {
      sentiment.innerHTML = `<h3>Sentiment Analysis:</h3> <span class='${response.sentiment}'>${response.sentiment}</span>`
    } else {
      getSentimentButton.style.display = 'none'
      sentiment.innerText = 'Something went wrong!'
    }
  })
})