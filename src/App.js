import './App.css';
import React, { useState, useEffect } from 'react';
import Randomjoke from './components/RandomJoke';
import Footer from './components/Footer';
import Like from './components/Like';
import Images from './components/Images';
import CommentForm from './components/CommentForm';

function App() {
  const [jokes, setJokes] = useState([]);
  const [likes, setLikes] = useState();
   const  [isLike, setIsLike] = useState(false);

   const [comms, setComms] = useState([])

   

   const addComment = (comment) => {

    console.log("getting comment")
    console.log(comment)
    setComms(comms => [...comms, comment])

   }
 
   console.log("commentssssssssssss")
   console.log(comms)

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
      <div>
        
      <div className='logo'>
        <img src={'https://res.cloudinary.com/dzauvt0gr/image/upload/v1700642806/lynxjcdw3eqmoxir3s6j.gif'} alt="" />
      </div>

      <div><h1 className='heading'>Chuckle Charm</h1></div>  
        </div>  
      <p className='heading'> Welcome to the World Of Fun and Comedy. Crack your ribs with laughter</p>
      <ol className='joke'>   
        
          {jokes.map((joke, index) => (
          <li key={index}>
            <p >Setup: {joke.setup}</p>
            <p>Punchline: {joke.punchline}</p>
            <hr />
            <Like/>
            <CommentForm addComment={addComment}/>
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