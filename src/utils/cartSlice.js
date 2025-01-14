import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
    // Name of the slice
    name: 'cart',
    initialState: {
        // Inital elements that are present in the cart
        items: []
    },
    reducers: {
        // function to add items to cart
        // Reducers are modifying our state
        addItems: (state, action) => {
            // Modifying the state over here
            state.items.push(action.payload);
        },
        removeItems: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { addItems, removeItems, clearCart } = CartSlice.actions;

export default CartSlice.reducer;

// this is a slice which will have their own state and reducers