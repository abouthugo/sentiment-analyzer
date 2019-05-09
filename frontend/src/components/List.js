import React, { useContext } from 'react';
import { FixedSizeList } from 'react-window'
import Card from './Card';
import {TweetsContext} from '../context'

function List() {
  
  const tweets = useContext(TweetsContext);
  const march = tweets.filter(t => new Date(t.created_at).getMonth() === 2);
  const april = tweets.filter(t => new Date(t.created_at).getMonth() === 3);
  const marchWeeks = splitByWeek(march);
  const aprilWeeks = splitByWeek(april);
  if(tweets.length > 0){

    const april_g = april.reduce(googleReducer);
    console.log("For April");
    const {score: g_score, magnitude} = april_g.gcloud;
    console.log(`Google Scores: ${g_score/april.length}\t magnitude: ${magnitude/april.length}`)

    const april_a = april.reduce(afinnReducer);
    const {score: a_score, comparative} = april_a.afinn;
    console.log(`Afinn Scores: ${a_score/april.length}\t comparative: ${comparative/april.length}`)

  }
  // console.log(aprilWeeks);

  const Row = ({ index, style }) => {
    const { text, gcloud, afinn, id } = tweets[index]
    return (
      <div
        key={id}
        style={style}>
        <Card
          text={text}
          afinn={afinn}
          gcloud={gcloud}
        />
      </div>

    )
  };

  return (
    <FixedSizeList
      height={500}
      width={600}
      itemSize={250}
      itemCount={tweets.length}
      style={{ padding: 20, border: "1px solid black", "borderRadius": 4 }}
    >
      {Row}
    </FixedSizeList>
  );

}

function splitByWeek(tweets){
  const week1 = tweets.filter(t => new Date(t.created_at).getUTCDate() <= 7);

  const week2 = tweets.filter(t =>{
    const d = new Date(t.created_at).getUTCDate();

    return d >7 && d <=14
  });

  const week3 = tweets.filter(t =>{
    const d = new Date(t.created_at).getUTCDate();

    return d >14 && d <=21
  });
  
  const week4 = tweets.filter(t =>{
    const d = new Date(t.created_at).getUTCDate();

    return d >21;
  });
  return {week1, week2, week3, week4};
}

function googleReducer(a, b){
  return {gcloud: {
    score: a.gcloud.score+b.gcloud.score, 
    magnitude: a.gcloud.magnitude+b.gcloud.magnitude
    }
  }
}

function afinnReducer(a,b){
  return {afinn: {
    score: a.afinn.score+b.afinn.score, 
    comparative: a.afinn.comparative+b.afinn.comparative
    }
  }
}


export default List;