import { CON_URL } from "../utils/constants";

const RestrauntCard = (props) => {
    const { name, cuisines, avgRating, costForTwo } = props?.resData;
    return (
        <div className='res-card shadow-lg hover:bg-gray-50'>
            <img className='card-image'
                src={CON_URL + props.resData.cloudinaryImageId} />
            <h3 className='font-bold py-4 text-lg'>{name}</h3>
            {/* <p className='text-sm'>{cuisines.join(',')}</p> */}
            <p className='text-base'>{avgRating}</p>
            <p className='text-sm'>{costForTwo}</p>
            <p className='text-sm'>{props.resData.sla.deliveryTime} Minutes</p>
        </div>
    )
}

export default RestrauntCard;


// this is a higher order component -> Takes the RestaurantCard as input and returns the new component (Component is a function that return a JSX) but it has promted label on top
// HOC is a higher order component which enhances the component
export const PromotedRestrauntCard = (RestrauntCard) => {
    return (props) => {
        return (
            <div className='res-card shadow-lg hover:bg-gray-50'>
                <h4 className='font-bold py-4 text-lg'>PROMOTED</h4>
                <RestrauntCard {...props} />
            </div>
        )
    }
}