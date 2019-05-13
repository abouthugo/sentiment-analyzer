import React, { useState, useContext } from 'react';
import { FixedSizeList } from 'react-window';
import { Statistic, Segment, Grid, Divider } from 'semantic-ui-react';
import Select from './Select';
import BarChart from './BarChart';
import Card from './Card';
import { TweetsContext } from '../context'

function List() {

  const [month, setMonth] = useState(2);
  function handleChange(e, data) {
    setMonth(data.value);
  }
  const tweets = useContext(TweetsContext);
  const tweetsMonth = tweets.filter(t => new Date(t.created_at).getMonth() === month);
  const weeks = splitByWeek(tweetsMonth);
  let data = [];

  for (let k in weeks) {
    data.push(packData(mapScores(weeks[k]), k));
  }  

  const Row = ({ index, style }) => {
    const { text, gcloud, id } = tweetsMonth[index]
    return (
      <div
        key={id}
        style={style}>
        <Card
          text={text}
          gcloud={gcloud}
        />
      </div>

    )
  };

  return (
    <Segment>
      <Grid columns={2}>
        <Grid.Column>
          <h1>Tweets</h1>
          <Select month={month} handleChange={handleChange} />
          <FixedSizeList
            height={500}
            width={600}
            itemSize={150}
            itemCount={tweetsMonth.length}
            style={{ padding: 20, border: "1px solid black", "borderRadius": 4, margin: "10px 0 " }}
          >
            {Row}
          </FixedSizeList>
          <Statistic horizontal>
            <Statistic.Value>{tweetsMonth.length}</Statistic.Value>
            <Statistic.Label>Tweets</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <h1>Statistics</h1>
          <BarChart data={data} />
          <Statistic.Group items={reduceStats(data)} style={{display: 'flex', justifyContent: "center"}}/>
        </Grid.Column>
      </Grid>
      <Divider vertical>Stats</Divider>
    </Segment>
  );

}

function splitByWeek(tweets) {
  const week1 = tweets.filter(t => new Date(t.created_at).getUTCDate() <= 7);

  const week2 = tweets.filter(t => {
    const d = new Date(t.created_at).getUTCDate();

    return d > 7 && d <= 14
  });

  const week3 = tweets.filter(t => {
    const d = new Date(t.created_at).getUTCDate();

    return d > 14 && d <= 21
  });

  const week4 = tweets.filter(t => {
    const d = new Date(t.created_at).getUTCDate();

    return d > 21;
  });
  return { week1, week2, week3, week4 };
}

function mapScores(week) {
  let neutral = 0;
  let positive = 0;
  let negative = 0;
  for (let i of week) {
    let score = i.gcloud.score;
    if (score >= 0.2) {
      positive++;
    } else if (score < 0.2 && score > -0.2) {
      neutral++;
    } else {
      negative++;
    }
  }
  return { neutral, positive, negative }
}

function packData(scores, week) {
  return {
    week,
    ...scores,
    "neutralColor": "#DDCE9F",
    "negativeColor": "#B05959",
    "positiveColor": "#678FB7"
  }
}

function reduceStats(weeks){
  let positive = 0;
  let neutral = 0;
  let negative = 0;
  for(let week of weeks){
    positive += week['positive'];
    neutral += week['neutral'];
    negative += week['negative'];
  }
  return [
    {key: "pos", label:"Positives", value: positive},
    {key: "neg", label:"Negatives", value: negative},
    {key: "neu", label:"Neutrals", value: neutral},
  ]
}

export default List;