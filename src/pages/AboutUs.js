import React from 'react';


function AboutUs (){
    return(
        <>
        <div className='container'>
            <h2>About Us</h2>
            <p> Welcome to Chuckle Charm the home of laughter and fun. Chuckle Charm is an application that allows you to access customized jokes that will make you happy, boost your mood, and lighten your day. We care about you, and hope it shall be fun interacting with the webpage.
            Feel free to send us feedback on any bugs, more jokes to add to the app, and general comments. Thank you!</p>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIx0cHrcIgcWVfY9qGyrIAjj_fwrb55ElXA&usqp=CAU' alt='flatiron logo'></img>        
        </div> <br />
        <footer className='socials'>
            <p>Links to our socials - </p>
            <a href='https://www.pinterest.com/search/pins/?rs=ac&len=2&q=memes%20funny&eq=memes&etslf=7709'>
                <img src="https://i.pinimg.com/236x/7d/7e/98/7d7e988109dedd8e716d5f6ef6ab3e77.jpg" alt='pinterest logo' className='socials-links'></img></a>
            <a href='https://unsplash.com/t/nature'>
                <img src="https://avatars.githubusercontent.com/u/9951955?s=200&v=4" alt='unsplash logo' className='socials-links'></img></a>
            <a href='https://play.google.com/store/apps/details?id=bookofjokes.app&hl=en&gl=US&pli=1'>
                <img src='https://freelogopng.com/images/all_img/1664285914google-play-logo-png.png' alt='google play logo' className='socials-links'></img></a>
        </footer>
        </>
    )
}

export default AboutUs;