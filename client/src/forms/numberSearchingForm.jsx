import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const NumberSearchingForm = () => {
  return (
    <form
      className="md:flex justify-between items-center max-w-[900px] mx-auto w-full border p-1 text-sm
        rounded-md text-black bg-gray-100/80"
    >
      <div className="md:flex my-2 outline-none">
        <label>Number category</label>
        <select className="border rounded-md p-2">
          <option selected>Standard</option>
          <option value="Luxury Suit">Luxury Suit</option>
          <option value="Family">Family</option>
        </select>
      </div>
      <div className="md:flex my-2">
        <label>Check-In</label>
        <input className="border rounded-md p-2" type="date" />
      </div>
      <div className="md:flex my-2">
        <label>Check-Out</label>
        <input className="border rounded-md p-2" type="date" />
      </div>

      <div className="md:flex my-2">
        <label>Number of guests</label>
        <select className="border rounded-md p-2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>
      </div>

      <div className="ml-4">
        <button>
          <AiOutlineSearch
            size={20}
            className="icon"
            style={{ color: "#ffffff" }}
          />
        </button>
      </div>
    </form>
  );
};

export default NumberSearchingForm;
