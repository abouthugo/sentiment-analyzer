import Sentiment from 'sentiment'
import {updateTweet} from './db-helper'

/**
 * Iterates through all records and performs sentiment analysis on them using the AFINN method
 */
export async function main(){
  const sentiment = new Sentiment();
  const {data : records} = await axios.get("http://localhost:3000/tweets/");
  for(let record of records){
    const {score, comparative} = sentiment.analyze(record.text);
    await updateTweet(record.id, {afinn: {score, comparative}});
  }
  console.log("All done!")
}



