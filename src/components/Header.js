import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
    const [btnNameReact, setBtnNameReact] = React.useState('Login');

    return (
        <>
            <div className='header'>
                <div className='logo-container'>
                    <img alt='res-logo' className='res-logo' src={LOGO_URL} />
                </div>
                <div className='nav-items'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About us</Link></li>
                        <li><Link to='/contact'>Contact us</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                        <button onClick={() => btnNameReact === 'Login' ? (setBtnNameReact("Logout")) : (setBtnNameReact("Login"))}>{btnNameReact}</button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;

