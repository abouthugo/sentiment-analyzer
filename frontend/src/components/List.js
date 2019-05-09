import React, { useState, useEffect } from 'react';
import { FixedSizeList } from 'react-window'
import Card from './Card';

function List() {
  const [tweets, setTweets] = useState([]);
  const fetched = false;

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

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/tweets/");
      const data = await res.json();
      setTweets([...data]);
    }

    fetchData();
  }, [fetched])



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


export default List;