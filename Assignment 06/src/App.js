import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

// if we dont have id, we can use indexes as id but it is not recommended written in the reactjs docs ex:
// <div className="res-container">
//         {restaurantList.map((restaurant, index) => (
//           <RestaurantCard key={index} resData={restaurant} />
//         ))}
//       </div>

// index increment by 1 at every step
