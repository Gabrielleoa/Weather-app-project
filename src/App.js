import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const[jokes, setJokes]= useState({})
  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/jokes/random')
    .then (response => response.json())
    .then (data  => {setJokes(data) 
    console.log(data)} )
  }, [])

  const displayTenJokes=(() => {
    if(jokes.length < 10){
      setJokes([...setJokes, jokes])
    }
    
  })

 /* const addJokes = (() => {
    
  })*/

  return (
    <div>
      <h1>Chuckle Charm</h1>
      <h2>Welcome to the World Of Fun and Comedy. Crack your ribs with laughter</h2>
     <div>
        <h2 key={jokes.id}>
          <p>setup: {jokes.setup}</p>
          <p>punchline: {jokes.punchline}</p>
        </h2>
      </div>


      

    </div>
    
   
  )
}

export default App;
