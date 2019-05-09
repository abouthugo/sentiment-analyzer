import React from 'react';
import List from './components/List';
import {TweetsContextProvider} from './context'
function App() {

  return (
      <TweetsContextProvider>
        <h1>Tweets collected with their sentiment</h1>
        <List/>
      </TweetsContextProvider>
  );
}


export default App;
