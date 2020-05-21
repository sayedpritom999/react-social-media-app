import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    return (
        <div className = "cart-container">
            <h4>Total sent request: {cart.length}</h4>
            <h4> Total Annual Income: ${cart.reduce((total, person) => total + person.income, 0)}</h4>
        </div>
    );
};

export default Cart;