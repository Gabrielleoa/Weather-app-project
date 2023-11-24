import { useState } from "react";

export default function RandomJoke() {
  const [joke, setJokes] = useState({});
 
  const handleClick = () => {
    fetch("https://official-joke-api.appspot.com/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJokes(data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  }

  return (
    <div className="joke">
        <h5 style={{textAlign:"center"}}>See More Jokes</h5>
        <div id="edit" onClick={handleClick} style={{cursor: 'pointer', border: '1px solid black'}}>
        <div key={joke.id} className="randomjoke">
          <p>Setup: {joke.setup}</p>
          <p>Punchline: {joke.punchline}</p>
        </div>
        </div>
    </div>
  );
}