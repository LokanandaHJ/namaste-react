import React from "react";
import { CON_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    console.log("----------Item-------", items);
    console.dir(items, { depth: "null" });

    const dispatch = useDispatch();

    const handleItemAdd = (item) => {
        //Dispatch an action to add the item to the cart for the store
        dispatch(addItems(item));

        // React will convert this dispatch to payload
        // {
        //     payload: Item
        // }
        // action.payload = item
        // The payload is automatically converted to the correct action type
        // and payload structure by the `createSlice` function
        //
        // The reducer function checks the type of the action and updates the state accordingly
        //
        // In this case, the reducer will add the item to the cart's items array
        //
        // The dispatch function also returns the action object
        //
        // When the button is clicked, the `handleItemAdd` function will be called
        //
        // The `handleItemAdd` function will dispatch the action to the Redux store
        //
        // The action will be caught up by the Redux middleware (like redux-thunk or redux-saga)
        //
        // The middleware will inspect the action type
        //
        // If the action type matches the type of the action creator, it will call the action creator function
        //
        // The action creator function will return an action object with the correct type and payload
        //
        // This action will be caught up by the reducer and added to the state tree
        // The state tree will now look like this:
        // {
        //     cart: {
        //         items: [
        //             {
        //                 id: "123",
        //                 quantity: 1
        //             }
        //         ]
        //     }
        // }
    }

    return (
        <div>
            {items.map((item, index) => (
                <div
                    key={item.card.info.id}
                    className="border border-gray-200 p-2 m-2 text-left flex justify-between"
                >
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>
                                <h2>{item?.card?.info?.name}</h2>
                            </span>
                            <span className="text-xs text-gray-500">
                                ₹{" "}
                                {item?.card?.info?.price
                                    ? item?.card?.info?.price / 100
                                    : item?.card?.info?.defaultPrice / 100}
                            </span>
                        </div>
                        <p className="text-xs text-gray-500">
                            {item?.card?.info?.description}
                        </p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 bg-white shadow-lg rounded-lg text-xs"
                                onClick={() => {
                                    handleItemAdd(item);
                                }}
                            >
                                Add +
                            </button>
                        </div>
                        <img
                            className="w-25 h-25"
                            src={CON_URL + item?.card?.info?.imageId}
                        />
                        <h3 className="font-bold py-4 text-lg">{name}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
