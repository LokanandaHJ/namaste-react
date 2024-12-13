import RestrauntCard from "./RestaurantCard";
import { resList } from '../utils/mockData';
import React from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [searchText, setSearchText] = React.useState('');
    const [listOfRestaurants, setListOfRestaurants] = React.useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = React.useState([]);

    const fetchApiData = async () => {
        const ApiKey = '28f752649a6da187';
        const EDUCORS_URL = 'https://educorssolver.host/api/getData';
        // Target URL from you want to fetch data m ,ex-github api
        const Target = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

        try {
            const response = await fetch(`${EDUCORS_URL}?ApiKey=${ApiKey}&Target=${encodeURIComponent(Target)}`);
            const data = await response.json();
            //optional chaining
            setListOfRestaurants(data?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(data?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (err) {
            console.error(err);
            // handle error here
        }
    }

    React.useEffect(() => {
        fetchApiData();
    }, [])



    // const filterRest = () => {
    //     const filteredRest = listOfRestaurants.filter(res => res.info.avgRating < 4);
    //     setListOfRestaurants(filteredRest);
    // }

    const searchFilter = (e) => {
        setSearchText(e.target.value);
        const filteredRest = listOfRestaurants.filter(res=> res.info.name.toLowerCase().includes(e.target.value));
        setFilteredRestaurants(filteredRest);
    }

    return listOfRestaurants.length === 0 ? (<Shimmer />) :
        (
            <div className='body'>
                <div className='search-bar'>
                    <input className="search-input" value={searchText} onChange={e=>{searchFilter(e)}}></input>
                    </div>
                {/* <button className="filter-btn" onClick={() => filterRest()}>Top Restaurants</button> */}
                <div className='res-container'>
                    {
                        filteredRestaurants.map(res => (
                            <RestrauntCard resData={res.info} key={res.info.id} />
                        ))
                    }
                </div>
            </div>
        )
}

export default Body;
