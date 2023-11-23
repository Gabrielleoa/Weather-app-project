import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import RandomJoke from '../components/RandomJoke';
import Like from '../components/Like';
import CommentForm from '../components/CommentForm';



export default function Home(){
    const [jokes, setJokes] = useState([]);
    // const [likes, setLikes] = useState();
    //  const  [isLike, setIsLike] = useState(false);
  
     //const [comms, setComms] = useState([])
  
     
  
    // /*} const addComment = (comment) => {
  
      
    //   console.log(comment)
    //   setComms(comms => [...comms, comment])
  
    //  }
   
     
    // console.log(comms)*/
  
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
  
    // const onLikeButtonClick = () => {
    //   setLikes(likes + (isLike ? -1 : 1));
    //   setIsLike(!isLike);
  
    // }
    return (
        <div>
            <h2 id="homepage">Home Page</h2>
            <div className='logo'>
        <img src={'https://res.cloudinary.com/dzauvt0gr/image/upload/v1700642806/lynxjcdw3eqmoxir3s6j.gif'} alt="" />
      </div>
            <p className='heading'> Welcome to the World Of Fun and Comedy. Crack your ribs with laughter</p>
            <ol className='joke'>   
            
            {jokes.map((joke, index) => (
            <li key={index}>
                <p >Setup: {joke.setup}</p>
                <p>Punchline: {joke.punchline}</p>
                <hr />
                <Like />
            </li>
            
            
            ))}
        
        </ol>
            <RandomJoke />
            <CommentForm />
            <Footer />
            
            
      

        </div>
        )
    
    }