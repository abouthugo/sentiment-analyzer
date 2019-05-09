import React, { useContext } from 'react';
import { FixedSizeList } from 'react-window'
import Card from './Card';
import {TweetsContext} from '../context'

function List() {
  
  const tweets = useContext(TweetsContext);

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


export default List;