import React from 'react';
import { Link } from 'react-router-dom';
import './css/NavBar.css'

const NavBar = () => {
    return (
    <>
       
        <nav>
            <div className='menuitem'>
                <Link to='/'>Home</Link>    
                <Link to='/about'>About</Link>
                <Link to='/funcat' >Cats</Link>
                <Link to='/fundog' >Dogs</Link>
            </div>
        </nav>
    </>
    )
}

export default NavBar