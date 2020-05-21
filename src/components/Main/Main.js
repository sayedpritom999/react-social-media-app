import React, { useState } from 'react';
import './Main.css';
import users from '../../fakeData/usersData'
import Profile from '../Profile/Profile'
import Cart from '../Cart/Cart'
const Main = () => {
    const [cart, setCart] = useState([]);
    const handleAddFriend = (user) => {
        const newCart = [...cart, user];
        setCart(newCart);
    }
    
    return (
        <div className = "main-container">
              <div className ="profile">
                    {
                        users.map( usr => <Profile
                        user = {usr} eventHandler = {handleAddFriend}
                        > </Profile>)
                    }
              </div>
                <div className = "cart">
                    <Cart cart = {cart}></Cart>
                </div>
        </div>
        
    );
};

export default Main;