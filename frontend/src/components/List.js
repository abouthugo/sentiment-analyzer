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
  const weeks  = splitByWeek(tweetsMonth);
  console.log(weeks)
  const Row = ({ index, style }) => {
    const { text, gcloud, afinn, id } = tweetsMonth[index]
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
    <Segment>
      <Grid columns={2}>
        <Grid.Column>
          <Select month={month} handleChange={handleChange} />
          <FixedSizeList
            height={500}
            width={600}
            itemSize={250}
            itemCount={tweetsMonth.length}
            style={{ padding: 20, border: "1px solid black", "borderRadius": 4, margin: "10px 0 " }}
          >
            {Row}
          </FixedSizeList>
          <Statistic>
            <Statistic.Value>{tweetsMonth.length}</Statistic.Value>
            <Statistic.Label>Tweets</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <BarChart />
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

function googleReducer(a, b) {
  return {
    gcloud: {
      score: a.gcloud.score + b.gcloud.score,
      magnitude: a.gcloud.magnitude + b.gcloud.magnitude
    }
  }
}

function afinnReducer(a, b) {
  return {
    afinn: {
      score: a.afinn.score + b.afinn.score,
      comparative: a.afinn.comparative + b.afinn.comparative
    }
  }
}


export default List;