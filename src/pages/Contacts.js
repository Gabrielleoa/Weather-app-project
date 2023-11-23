import React from 'react';
// import { useState } from 'react';

export default function Contacts (){
    // const[feedback, setFeeback]=useState ('');

   
const handleSubmit =()=>{

 alert('Thanks for Your Feedback')
}
    return (  
        <div>
            <div className='feedback'> 
                <h2> Talk to Us</h2>
                <p> Are you interested in contributing to our jokes or adding more jokes, feel free to reach us via the emails;</p>
                <p> Telephone: +254789908866</p>
                <a href='josephmangara2@gmail.com'>Email: Mang'ara</a> <br></br>
            </div>
            <div>
            </div>
            <form className="ContanctForm" onSubmit={handleSubmit}>
                
            <label>Name: < input type='text'  placeholder ="Enter Your name"></input></label> <br/>
               
               
            <label>Any Questions <input type="text" placeholder ="Any questions?"></input></label><br/>
               
               <label>Add A Joke</label>
               <textarea></textarea><br/>
               <button> Submit </button>
            </form> <>
           
            </>
        </div>
        
    )
}