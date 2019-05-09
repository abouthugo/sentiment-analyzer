import React, {createContext, useState, useEffect} from 'react'

export const TweetsContext = createContext([]);

export const TweetsContextProvider = ({children}) => {
  const [tweets, setTweets] = useState([]);
  const fetched = false;
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/tweets/");
      const data = await res.json();
      setTweets(data);
    }

    fetchData();
  }, [fetched])

  return (
    <TweetsContext.Provider value={tweets}>
      {children}
    </TweetsContext.Provider>
  )
}