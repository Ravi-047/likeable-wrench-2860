import React from "react";
import SideCart from "./SideCart";
function City({ cityData, onClose }) {
  return (
    <div className="allCity">
      {cityData.map((item) => {
        return <SideCart key={item.id} item={item} onModalClose={onClose} />;
      })}
    </div>
  );
}
export default City;
