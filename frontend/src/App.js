import React from 'react';
import List from './components/List';
import { TweetsContextProvider } from './context'
import { Container } from 'semantic-ui-react'
function App() {

  return (
    <TweetsContextProvider>
      <Container fluid style={{padding: 20}} textAlign="center">
        <h1>Dollskill Customer Satisfaction Outlook</h1>
        <List />
      </Container>
    </TweetsContextProvider>
  );
}


export default App;
