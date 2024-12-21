/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { TbViewportWide } from "react-icons/tb";

const Sellers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(10);
  const [show, setShow] = useState(false);

  //   for dropdown button
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const options = [10, 20];

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
    <div className="lg:px-9 px-2 lg:py-10 py-1">
      <div className="w-full p-4 bg-white rounded-[35px]">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl text-stone-700 pl-4 ">
            Sellers List
          </h1>
          <div className="relative md:block  ">
            <input
              type="text"
              placeholder="Search"
              className="px-2 pl-12 py-2 focus:border-stone-400 outline-none border border-stone-300 rounded-3xl text-stone-600 font-normal w-[120px] lg:w-full"
            />
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-stone-400 text-md">
              <FaSearch />
            </div>
          </div>
          {/* Dropdown Button */}
          <div className="relative w-18 " ref={dropdownRef}>
            <div
              className="w-full h-10 rounded-3xl px-4 flex items-center justify-between cursor-pointer hover:border-stone-300 outline-none bg-white border  border-stone-200 text-stone-600 drop-shadow-md duration-300 hover:bg-stone-300"
              onClick={toggleDropdown}
              onChange={(e) => setPerPage(parseInt(e.target.value))}
            >
              {perPage}
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
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Dropdown Button */}
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full  text-sm text-left text-stone-700 ">
            <thead className="text-[14px] text-stone-700 uppercase  border-b border-stone-300">
              <tr>
                <th
                  id="serialNo"
                  scope="col"
                  className="py-3 px-6 font-semibold"
                >
                  No.
                </th>
                <th id="image" scope="col" className="py-3 px-6  font-semibold">
                  Image
                </th>
                <th id="name" scope="col" className="py-3 px-8  font-semibold">
                  Name
                </th>

                <th
                  id="shopName"
                  scope="col"
                  className="py-3 px-8  font-semibold"
                >
                  Shop Name
                </th>
                <th
                  id="payment"
                  scope="col"
                  className="py-3 pl-7  font-semibold"
                >
                  Payment Status
                </th>
                <th id="email" scope="col" className="py-3 px-8  font-semibold">
                  Email
                </th>
                <th
                  id="devision"
                  scope="col"
                  className="py-3 px-8  font-semibold"
                >
                  Devision
                </th>
                <th
                  id="district"
                  scope="col"
                  className="py-3 px-6  font-semibold"
                >
                  District
                </th>
                <th
                  id="action"
                  scope="col"
                  className="py-3 px-4  font-semibold"
                >
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5].map((d, i) => (
                <tr key={i}>
                  <td
                    headers="serialNo"
                    className="py-1 px-8 font-medium whitespace-nowrap"
                  >
                    {d}
                  </td>
                  <td
                    headers="image"
                    className="py-1 px-6 font-medium whitespace-nowrap"
                  >
                    <img
                      className="w-[45px] h-[45px]"
                      src={`http://localhost:3001/images/category/${d}.jpg`}
                      alt="category"
                    />
                  </td>
                  <td
                    headers="name"
                    className="py-1 px-8 font-medium whitespace-nowrap"
                  >
                    Aditya Kumar
                  </td>
                  <td
                    headers="shopName"
                    className="py-1 px-8 font-medium whitespace-nowrap"
                  >
                    Art-X Canvas
                  </td>
                  <td
                    headers="payment"
                    className="py-1 px-8 font-medium whitespace-nowrap"
                  >
                    <span>Pending</span>
                  </td>

                  <td
                    headers="email"
                    className="py-1 px-8 font-medium whitespace-nowrap"
                  >
                    aditya@gmail.com
                  </td>
                  <td
                    headers="devision"
                    className="py-1 px-8 font-medium whitespace-nowrap"
                  >
                    Maharastra
                  </td>
                  <td
                    headers="district"
                    className="py-1 px-8 font-medium whitespace-nowrap"
                  >
                    Pune
                  </td>

                  <td
                    headers="action"
                    className="py-1 px-6 font-medium whitespace-nowrap"
                  >
                    <div className="flex justify-start items-center gap-3">
                      <Link className="p-[6px] bg-stone-600 rounded hover:shadow-lg hover:shadow-stone-500/20">
                        <TbViewportWide className="text-white" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-full flex justify-center mt-6 bottom-6 right-6 ">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            perPage={perPage}
            showItem={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Sellers;
