import { CON_URL } from "../utils/constants";

const RestrauntCard = (props) => {
    const { name, cuisines, avgRating, costForTwo } = props?.resData;
    return (
        <div className='res-card'>
            <img className='card-image'
                src={CON_URL + props.resData.cloudinaryImageId} />
            <h3 className='res-card-info'>{name}</h3>
            <p className='res-card-info'>{cuisines.join(',')}</p>
            <h4 className='res-card-info'>{avgRating}</h4>
            <p className='res-card-info'>{costForTwo}</p>
            <p className='res-card-info'>{props.resData.sla.deliveryTime} Minutes</p>
        </div>
    )
}

export default RestrauntCard;