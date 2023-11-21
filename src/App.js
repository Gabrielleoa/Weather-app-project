import React, { useState, useEffect } from 'react';
import './App.css';
import Displaymore from './components/DisplayMore';


function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/jokes/ten')
      .then(response => response.json())
      .then(data => {
        setJokes(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching jokes:', error);
      });
  }, []);

  const fetchNewRandomJokes = () => {
    fetch('https://official-joke-api.appspot.com/jokes/random')
      .then(response => response.json())
      .then(data => {
        setJokes(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching new random jokes:', error);
      });
  };

  return (
    <div>
      <h1>Chuckle Charm</h1>
      <p>Welcome to the World Of Fun and Comedy. Crack your ribs with laughter</p>
      <div>
        {jokes.map((joke, index) => (
          <div key={index}>
              <p>Setup: {joke.setup}</p>
              <p>Punchline: {joke.punchline}</p>
            <hr></hr>
          </div>
        ))}
      </div>
      <Displaymore fetchNewRandomJokes={fetchNewRandomJokes} />
    </div>
  );
}



export default App;
