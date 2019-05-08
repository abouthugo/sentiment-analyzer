import axios from 'axios'
import {LanguageServiceClient} from '@google-cloud/language'
import {updateTweet} from './db-helper';
import {sleep} from './utils'

/**
 * Converts a string of text into a doc object for google cloud language API
 * @param {String} text String of text to be transformed
 * @returns {{}} An object containing the text and required field(s) for the API
 */
function doc(text){
  return {
    content: text,
    type: 'PLAIN_TEXT',
  };
}

/**
 * Fetches all records from local database and sends each record
 * to the google nlp API to obtain sentiment analysis on each.
 */
export async function main(){
  const {data : records} = await axios.get("http://localhost:3000/tweets/");
  let i = 0;
  while(i < records.length){
    const sentiment = await googleSentiment(records[i].text)
    await updateTweet(records[i].id, {
      gcloud: {...sentiment}
    })
    // wait for 200 ms, quota for gcp is 600 per minute, 10 per second so 200ms gives me room to play with
    await sleep(200)
    i++;
    console.log(`${i}/${records.length}`);
  }
  console.log("completed!");
}

/**
 * Hits google's nlp api with a given text in order to get sentiment analysis
 * @param {String} text 
 * @returns {Promise} a promise of sentiment analysis
 */
async function googleSentiment(text){
  const client = new LanguageServiceClient();
  const document = doc(text);
  const [result] = await client.analyzeSentiment({document: document}); 
  return result.documentSentiment;
}
