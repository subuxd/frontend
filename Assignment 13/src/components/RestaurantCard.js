import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  locality,
  sla,
  costForTwo,
  avgRating,
}) => {
  return (
    // here in inline css we used 2 sets of {{}} b/c the 1st is for {js} and the 2nd is for {js object}
    <div
      data-testid="resid"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        {locality},{areaName}
      </h4>
      <h4>{avgRating}⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}🕥</h4>
    </div>
  );
};

//---------------------Higher Order component-------------------------
// it takes a component and enhances it and returns

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Open Now
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
