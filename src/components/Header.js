import React, { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = React.useState('Login');

    const userData = useContext(UserContext);

    const onlineStatus = useOnlineStatus();
    // we need to subscribe to store using selector
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <>
            <div className='flex justify-between shadow-lg'>
                <div className='logo-container'>
                    <img alt='res-logo' className='res-logo' src={LOGO_URL} />
                </div>
                <div className='nav-items'>
                    <ul>
                        <li>{onlineStatus ? "✔️" : "❌"}</li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About us</Link></li>
                        <li><Link to='/contact'>Contact us</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                        <button onClick={() => btnNameReact === 'Login' ? (setBtnNameReact("Logout")) : (setBtnNameReact("Login"))}>{btnNameReact}</button>
                        <li>Cart: {cartItems.length}</li>
                        <li className="font-bold">{userData.loggedInUser}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;

