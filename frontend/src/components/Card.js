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

const Card = ({text, gcloud, afinn}) => (
  <Layout>
    <Text>{text}</Text>
    <p>Google Cloud NLP API</p>
    <div style={{"display": "flex"}}>
      <div style={{"margin": 4}}>Score {gcloud.score}</div>
      <div style={{"margin": 4}}>Magnitude {gcloud.magnitude}</div>
    </div>
    <p>AFINN based sentiment analysis</p>
    <div style={{"display": "flex"}}>
      <div style={{"margin": 4}}>Score {afinn.score}</div>
      <div style={{"margin": 4}}>Comparative {afinn.comparative}</div>
    </div>
  </Layout>
)

export default Card;