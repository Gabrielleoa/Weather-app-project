import './App.css';
import React, { useState, useEffect } from 'react';
import Randomjoke from './components/RandomJoke';
import Footer from './components/Footer';
import Like from './components/Like';

function App() {
  const [jokes, setJokes] = useState([]);
  const [likes, setLikes] = useState();
   const  [isLike, setIsLike] = useState(false);
 


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

  const onLikeButtonClick = () => {
    setLikes(likes + (isLike ? -1 : 1));
    setIsLike(!isLike);

  }

  return (
    <div>
      <h1>Chuckle Charm</h1>
      <p>Welcome to the World Of Fun and Comedy. Crack your ribs with laughter</p>
      <ol>
        
          {jokes.map((joke, index) => (
          <li key={index}>
            <p>Setup: {joke.setup}</p>
            <p>Punchline: {joke.punchline}</p>
            <hr />
            <Like/>
          </li>
          
          
        ))}
       
      </ol>
      

    <Randomjoke /> 
    <center>
    <Like/>
    </center>
    <Footer />
    
    </div>
  );
}

export default App;