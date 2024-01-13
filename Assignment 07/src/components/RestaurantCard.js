import { CDN_URL } from "../../utils/constants";

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
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
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

export default RestaurantCard;
