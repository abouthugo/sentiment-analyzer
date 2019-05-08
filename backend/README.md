# Measuring customer satisfaction through tweets using sentiment analysis

This is the backend portion of a sentiment analyzer for tweets. It can be used with any text really but requires some tweaking with the models and data you feed it. The data collected was gathered using the keyword `dollskill`. For more information how I collected the tweets please visit my [tweet collector repo](https://github.com/p-hugo/tweet-collector)

## Built with
- [JSON-server](https://www.npmjs.com/package/json-server): REST API generator
- [Sentiment](https://www.npmjs.com/package/sentiment): AFINN based sentiment analysis
- [Google Cloud Natural Langue API](https://cloud.google.com/natural-language/): sentiment analysis from Google.

## Scripts

#### `yarn run:api` 

This script will start the json server and should be the first script you run after you install the dependencies and before you run any of the 2 analyzers

#### `yarn start "google|afinn"`

You need to type either "google" or "afinn" depending on which of the two analysis you want to use.