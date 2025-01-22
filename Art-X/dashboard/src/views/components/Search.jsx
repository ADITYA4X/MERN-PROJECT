import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";

const Search = ({
  perPage,
  setPerPage,
  options,
  searchValue,
  setSearchValue,
}) => {
  //   for dropdown button
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Attach event listener on component mount
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center">
      <div className="relative md:block ">
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          type="text"
          placeholder="Search"
          className="px-4 pl-12 py-2 focus:border-stone-400 outline-none border border-stone-300 rounded-3xl text-stone-600 font-normal"
        />
        <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-stone-400 text-md">
          <FaSearch />
        </div>
      </div>
      {/* Dropdown Button */}
      <div className="relative w-28 " ref={dropdownRef}>
        <div
          className="w-full h-10 rounded-3xl px-4 flex items-center justify-between cursor-pointer hover:border-stone-300 outline-none bg-white border  border-stone-200 text-stone-600 drop-shadow-md duration-300 hover:bg-stone-300"
          onClick={toggleDropdown}
          onChange={(e) => setPerPage(parseInt(e.target.value))}
        >
          {perPage}/Page
          <span className="text-[10px] pl-3">
            <FaChevronDown />
          </span>{" "}
          {/* Down Arrow */}
        </div>

        {/* Dropdown Options */}
        {isOpen && (
          <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-3xl shadow-lg z-[1000]">
            {options.map((option, index) => (
              <div
                key={index}
                value={option}
                className={`text-stone-600 px-6 py-2 hover:bg-stone-200 hover:rounded-3xl cursor-pointer ${
                  index === 0 ? "rounded-t-lg" : ""
                } ${index === options.length - 1 ? "rounded-b-lg" : ""}`}
                onClick={() => {
                  setPerPage(option);
                  setIsOpen(false);
                }}
              >
                {option}/Page
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Dropdown Button */}
    </div>
  );
};

export default Search;
