import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router-dom";
import {
  faUtensils,
  faWater,
  faSlash,
} from "@fortawesome/free-solid-svg-icons";

const RoomCard = ({
  _id,
  bg,
  text,
  category,
  seaview,
  halfboard,
  price,
  searchData,
}) => {
  console.log(searchData);
  const history = useHistory();
  const handleClick = (_id) => {
    history.push(`/roomsPage/${_id}`, searchData);
  };

  return (
    <div>
      <div className="relative">
        <img className="w-full h-full object-cover" src={bg} alt="/" />
        <div className="bg-gray-900/10 absolute top-0 left-0 w-full h-full">
          <p className="right-4 top-4 text-2xl font-bold text-white absolute">
            {text}
          </p>
        </div>
      </div>
      <div className="bg-gray-400/10 p-6">
        <p>
          <span className="font-bold">Category</span>: {category}
        </p>
        <p>
          <span className="font-bold">Seaview</span>:{" "}
          {seaview ? <FontAwesomeIcon icon={faWater} /> : ""}
        </p>
        <p>
          <span className="font-bold">Halfboard</span>:{" "}
          {halfboard ? (
            <FontAwesomeIcon icon={faUtensils} />
          ) : (
            <FontAwesomeIcon icon={faSlash} />
          )}
        </p>
        <p>
          <span className="text-lg font-bold pt-6">Price</span>: {price}
        </p>
        <button className="mt-6 mb-2" onClick={() => handleClick(_id)}>
          Look and Book
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
