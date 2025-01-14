import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const AppStore = configureStore(
    //this store should also have a reducer
    {
        reducer: {
            //add your reducers here
            cart: cartReducer,
            //after this if we have different slices we can add down   
            //like:
            //orders: ordersReducer,
            //users: usersReducer,
            //...
        },
        //add middleware here if needed
    }
);

export default AppStore;

// this is a store which can have multiple slices