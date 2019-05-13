import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  border-left: 2px solid black;
  padding-left: 5px;
`

const Layout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 20px;
  border-bottom: 2px solid black;
  min-height: fit-content;
`

const Card = ({text, gcloud}) => (
  <Layout>
    <Text>{text}</Text>
    <div style={{"display": "flex"}}>
      <div style={{"margin": 4}}>Score {gcloud.score.toFixed(2)}</div>
      <div style={{"margin": 4}}>Magnitude {gcloud.magnitude.toFixed(2)}</div>
    </div>
  </Layout>
)

export default Card;