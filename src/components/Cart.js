import React from "react";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {

    // Subscribing to the store using useSelector
    //  we can use like cartItems = useSelector((store) => store);
    // cartItems = store.cart.items
    // by using like this we are subscribed to the entore store which might have cart, user and all other slices
    const cartItems = useSelector((store) => store.cart.items);

    //dispatch function to dispatch an action
    const dispatch = useDispatch();

    const handleClearCart = (item) => {
        // Dispatching an action to clear the cartItems
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h2 className="text-2xl font-bold">Cart</h2>
            <button className="bg-black text-white p-2 m-2 rounded-md" onClick={() => handleClearCart()}>Clear Cart</button>
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}></ItemList>
            </div>
        </div>
    )
}

export default Cart;