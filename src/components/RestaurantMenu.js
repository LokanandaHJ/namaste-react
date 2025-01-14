import React, { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const resId = useParams();
    const [showIndex, setShowIndex] = useState(null);

    // this is a custom hook which we created for fetching the restaurant data using restaurant id
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <Shimmer />;
    }

    console.log("--data--in ResMenu--->", resInfo);
    const {
        avgRating,
        areaName,
        city,
        costForTwoMessage,
        cuisines,
        name,
        totalRatingsString,
    } = resInfo?.cards[2]?.card?.card?.info;

    const itemCard =
        resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    //jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[1].card.info.name

    const restaurantCategoryList =
        resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
            (card) =>
                card.card?.["card"]?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    return (
        <div className="text-center" key="a">
            <h1 className="font-bold my-6">{name}</h1>
            {restaurantCategoryList.map((category, index) => {
                return (
                    <RestaurantCategory
                        index={index}
                        key={category.card.id}
                        data={category.card.card}
                        setShowCard={() => setShowIndex(index)}
                        showIndex={showIndex === index ? true : false}
                    />
                );
            })}
        </div>
    );
};

export default RestaurantMenu;
