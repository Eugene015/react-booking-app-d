import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { addSearchData } from "../../store/searchData";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
  });
  const history = useHistory();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = (searchData) => {
    dispatch(addSearchData(searchData));
    history.push("/roomsPage");
  };

  const handleDatesCloseOpen = () => {
    setOpenDate(!openDate);
  };

  return (
    <div className="grid grid-cols-2 gap-4 md:flex items-center justify-between pr-[5px] pl-[15px] rounded-lg lg:w-full 2xl:w-full max-w-[796px] md:h-[60px] bg-white border-[3px] border-gray-300 p-4 relative">
      <div className="md:flex items-center gap-[10px] text-gray-400">
        <FontAwesomeIcon icon={faBed} className="text-gray-400" />
        <select
          className="border-0 outline-0"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Select category</option>
          <option value="standard">Standard</option>
          <option value="luxury">Luxury Suit</option>
          <option value="family">Family</option>
        </select>
      </div>
      <div className="md:flex items-center gap-[10px] text-gray-400">
        <FontAwesomeIcon icon={faCalendarDays} className="text-gray-400" />
        <span
          onClick={handleDatesCloseOpen}
          className="text-gray-400 cursor-pointer"
        >{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
          dates[0].endDate,
          "dd/MM/yyyy"
        )}`}</span>
        {openDate && (
          <div className="fixed bottom-[0px] left-[0px] right-[0px] md:absolute md:bottom-auto md:left-auto md:right-auto md:top-[50px] z-2 bg-white">
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dates}
              minDate={new Date()}
              weekStartsOn={1}
              rangeColors={["#5651e5"]}
            />
            <div className="bg-white">
              <button
                className="main m-4 md:hidden"
                onClick={handleDatesCloseOpen}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="md:flex items-center gap-[10px] text-gray-400">
        <FontAwesomeIcon icon={faPerson} className="text-gray-400" />
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="text-gray-400 cursor-pointer"
        >{`${options.adult} adult · ${options.children} children`}</span>
        {openOptions && (
          <div className="fixed bottom-[0px] left-[0px] right-[0px] md:absolute md:top-[50px] md:bottom-auto md:left-auto md:right-auto bg-white z-2 text-gray-400 border shadow-lg">
            <div className="flex flex-col justify-center items-center my-4">
              <div className="flex justify-between m-[10px] w-[200px]">
                <span className="optionText">Adult</span>
                <div className="flex items-center gap-[10px] text-sm text-black">
                  <button
                    disabled={options.adult <= 1}
                    className="w-[30px] h-[30px] border text-gray-500 cursor-pointer bg-white disabled:cursor-not-allowed"
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button
                    className="w-[30px] h-[30px] border text-gray-500 cursor-pointer bg-white disabled:cursor-not-allowed"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between m-[10px] w-[200px]">
                <span className="optionText">Children</span>
                <div className="flex items-center gap-[10px] text-sm text-black">
                  <button
                    disabled={options.children <= 0}
                    className="w-[30px] h-[30px] border text-gray-500 cursor-pointer bg-white disabled:cursor-not-allowed"
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.children}
                  </span>
                  <button
                    className="w-[30px] h-[30px] border  text-gray-500 cursor-pointer bg-white disabled:cursor-not-allowed"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white">
              <button
                className="main m-4 md:hidden"
                onClick={() => setOpenOptions(!openOptions)}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="md:flex items-center gap-[10px] text-gray-400">
        <button
          className="main"
          onClick={() => handleSearch({ category, dates, options })}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
