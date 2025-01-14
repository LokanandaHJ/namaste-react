import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, setShowCard, showIndex }) => {

    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between" onClick={() => setShowCard()}>
                <span className="font-bold text-lg">{data.title}  ({data.itemCards.length})</span>
                <span>{showIndex ? '-' : '+'}</span>
            </div>
            {
                showIndex ?
                    <ItemList items={data.itemCards} />
                    :
                    <></>
            }
        </div>
    )
}
export default RestaurantCategory;