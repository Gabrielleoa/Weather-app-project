
import { NavLink } from 'react-router-dom';

export default function Header(){

    return(
        <div id='navbar'>
        <h1 className='heading'>Chuckle Charm</h1>
        <NavLink to="/home">Home</NavLink> | <NavLink to="/AboutUs">About Us</NavLink> | <NavLink to="/Contacts">Contacts</NavLink>
        </div>  
       

    )
}