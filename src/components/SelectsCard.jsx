import React from "react";

const SelectsCard = ({ bg, text, category, seaview, halfboard, price }) => {
  const handleClick = ({ target }) => {
    return console.log("clicked", target);
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
          <span className="font-bold">Seaview</span>: {seaview}
        </p>
        <p>
          <span className="font-bold">Halfboard</span>: {halfboard}
        </p>
        <p>
          <span className="text-lg font-bold pt-6">Price</span>: {price}
        </p>
        <button className="mt-6 mb-2" onClick={handleClick}>
          Read more
        </button>
      </div>
    </div>
  );
};

export default SelectsCard;
