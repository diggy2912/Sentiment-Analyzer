# Political Sentiment Analyzer

## Introduction

The Political Sentiment Analyzer is an advanced tool designed to detect and analyze the sentiment of political posts on Twitter (X), specifically focusing on discussions related to the India budget. This ongoing project integrates several technologies including Natural Language Processing (NLP), Machine Learning (ML), Blockchain, and Big Data to deliver valuable insights into political discussions on social media.

### Project Objectives

- **Political Post Detection**: Identify tweets that pertain to political topics, with a focus on the India budget.
- **Sentiment Analysis**: Analyze the sentiment of tweets that are political in nature.
- **Data Collection**: Use the `ntscraper` library to gather relevant tweets from Twitter.
- **Data Preprocessing**: Clean and prepare the data for accurate analysis.
- **Model Building**: Develop and train ML models to perform detection and sentiment analysis.
- **Deployment**: Utilize Apache Spark for model deployment and data storage.
- **User Interface**: Create a Chrome extension for easy access and interaction with the sentiment analysis models.

## Features

- **Political Detection Model**: Classifies tweets to determine if they are political and related to the India budget.
- **Sentiment Analysis Model**: Evaluates the sentiment of political tweets.
- **Twitter Scraper**: Collects tweets using the `ntscraper` library.
- **Data Storage**: Stores collected data in Apache Spark.
- **Chrome Extension**: Provides a user-friendly interface for real-time sentiment analysis.

## To-Do List

### Data Collection
- [ ] **Use `ntscraper` Library**: Collect tweets related to the India budget using the `ntscraper` library.

### Data Preprocessing
- [ ] **Implement Data Cleaning**: Develop scripts to clean and preprocess the collected tweet data.
- [ ] **Feature Extraction**: Create methods for extracting relevant features from tweets.

### Model Building
- [ ] **Build Political Detection Model**: Develop and train an ML model to identify political tweets related to the India budget.
- [ ] **Build Sentiment Analysis Model**: Develop and train an ML model to analyze the sentiment of political tweets.
- [ ] **Model Evaluation**: Test and evaluate both models for accuracy and performance.

### Model Deployment
- [ ] **Set Up Apache Spark**: Configure Spark environment for data storage and model deployment.
- [ ] **Deploy Models**: Deploy the trained models to the Spark environment.
- [ ] **Develop Deployment Scripts**: Create scripts to handle model requests and responses.

### Chrome Extension
- [ ] **Design Chrome Extension**: Create the interface and functionalities for the Chrome extension.
- [ ] **Develop Extension**: Implement the Chrome extension to interact with the deployed models.
- [ ] **Integrate with Deployed Models**: Ensure the extension can send requests to and receive responses from the models.

### General Tasks
- [ ] **Document Code and Setup**: Write detailed documentation for code and setup instructions.
- [ ] **Update README**: Provide a clear and updated README file with instructions and information.
- [ ] **Testing**: Conduct thorough testing of the entire system (scraping, preprocessing, model inference, and extension).

## Dependencies

- **Apache Spark**: For data storage and model deployment.
- **Python Libraries**: For data processing and ML (e.g., Pandas, Scikit-learn, TensorFlow).
