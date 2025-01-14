import React, { useState, useEffect } from 'react';

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {

        const ApiKey = '28f752649a6da187';
        const EDUCORS_URL = 'https://educorssolver.host/api/getData';
        // Target URL from you want to fetch data m ,ex-github api
        const Target = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9872785&lng=77.7562406&restaurantId=' + resId.id;

        try {
            const data = await fetch(`${EDUCORS_URL}?ApiKey=${ApiKey}&Target=${encodeURIComponent(Target)}`);
            const jsonData = await data.json();
            setResInfo(jsonData.data);
            console.log(jsonData.data?.cards[2]?.card?.card?.info);
        } catch {
            console.error(err);
        }
    }

    return resInfo;
}

export default useRestaurantMenu;