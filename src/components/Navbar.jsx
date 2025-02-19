import React  from 'react';
import {Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
   
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
   
    const logout =()=>{
       localStorage.clear();
       navigate('/signup');
    }

    return(
        <div>
            
            <img alt='logo' 
            className='logo'
            src='https://previews.123rf.com/images/dariachekman/dariachekman1910/dariachekman191000015/132817556-pink-store-icon-shop-icon-flat-design-vector-illustration.jpg'/>
             
            {auth ? <ul className='nav-ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/delete">Delete Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout  ({JSON.parse(auth).name}) </Link></li>
                </ul>
                
                :
                
                <ul className='nav-ul nav-right'>
                   
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                
                </ul>
                }
                
                 
        </div>
        
    );
}

export default Navbar;
 
