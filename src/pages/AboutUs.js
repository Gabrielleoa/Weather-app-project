import React, {useState, useEffect} from 'react';


function AboutUs (){
  const [authorInfo, setAuthorInfo] = useState([]);
  
  useEffect (() => {
    fetch("https://my-json-server.typicode.com/Gabrielleoa/joke-generator-project/authors")
    .then(res => res.json())
    .then(info => {
        console.log(info)
        setAuthorInfo(info)
    })
    .catch(error => {
        console.error('Error fetching jokes:', error);
      });
  }, []);

    return(
        <>
        <div className='container'>
            <h2>About Us</h2>
            <p> Welcome to Chuckle Charm the home of laughter and fun. Chuckle Charm is an application that allows you to access customized jokes that will make you happy, boost your mood, and lighten your day. We care about you, and hope it shall be fun interacting with the webpage.
            Feel free to send us feedback on any bugs, more jokes to add to the app, and general comments. Thank you!</p>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIx0cHrcIgcWVfY9qGyrIAjj_fwrb55ElXA&usqp=CAU' alt='flatiron logo'></img>        
        </div> <br />
        <h5 className='container'>Personal Information</h5>
        <ul> 
            {authorInfo.map((authors) => (
                <li key={authors.id} className='author-info'>
                    <p>Name - {authors.name}</p>
                    <p>Profession - {authors.profession}</p>
                    <br />
                </li>
            ))}
        </ul>
        </>
    )
}

export default AboutUs;