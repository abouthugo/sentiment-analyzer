import React, { useState } from 'react';
import List from './components/List';
import { TweetsContextProvider } from './context'
import { Container } from 'semantic-ui-react'
function App() {

  return (
    <TweetsContextProvider>
      <Container fluid>
        <h1>Tweets collected with their sentiment</h1>
        <List/>
      </Container>
    </TweetsContextProvider>
  );
}


export default App;
