import RestaurantCard from "./RestaurantCard";
import restaurantList from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  // local state variable is superpowerful
  const [listOfRestaurants, setlistOfRestaurants] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4.2
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          // whenever using map dont forget to give key it helps to avoid re-rendering of all data whenever any new data is added i.e, only the new added data will be rendered
          // The spread operator ({...restaurant.data}) is used to pass all properties of the restaurant.data object as props to the RestaurantCard component.
        ))}
      </div>
    </div>
  );
};

export default Body;
