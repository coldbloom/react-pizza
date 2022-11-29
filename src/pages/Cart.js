import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
    const items = useSelector(state => state.cart.items)
    return (
        <div>
            <h1>Корзина</h1>
            {
                items.map((item, i) => (
                    <CartItem key={i} {...item}/>
                ))
            }
        </div>
    );
};

export default Cart;