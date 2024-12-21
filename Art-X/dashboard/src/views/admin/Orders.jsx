import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [searchValue, setSearchValue] = useState("");
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
    <div className="lg:px-4 px-2 lg:p-9 py-2  ">
      <div className="lg:w-full  py-4 lg:px-4 px-[0.5px] bg-white rounded-[35px] overflow-x-auto">
        <div className="flex justify-between items-center">
          <div className="relative md:block ">
            <input
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

        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full px-3 text-sm text-left bg-white">
            <div className="text-sm text-stone-800 uppercase border-b border-stone-400">
              <div className="flex justify-between items-center">
                <div className="py-3 w-[22%] font-bold">Order Id</div>
                <div className="py-3 w-[14%] font-bold">Price</div>
                <div className="py-3 w-[18%] font-bold px-1">
                  Payment Status
                </div>
                <div className="py-3 w-[20%] font-bold pl-2">Order Status</div>
                <div className="py-3 w-[18%] font-bold">Action</div>
                <div className="py-3 w-[9%]  text-lg font-bold">
                  <RiArrowDownDoubleLine />
                </div>
              </div>
            </div>

            <div className=" text-stone-800 ">
              <div className="flex px-2 justify-between items-start border-b-[0.5px] border-stone-200 overflow-x-auto">
                <div className="py-3 w-[22%] font-medium whitespace-nowrap">
                  #2424
                </div>
                <div className="py-3 w-[14%] font-medium">&#8377;462</div>
                <div className="py-3 w-[18%] font-medium px-1">Pending</div>
                <div className="py-3 w-[20%] font-medium px-1">Pending</div>
                <div className="py-3 pl-1 w-[18%] font-medium">
                  <Link to="/admin/dashboard/order/details/3">View</Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-3  w-[8%] font-medium"
                >
                  <RiArrowDownDoubleLine />
                </div>
              </div>

              <div
                className={
                  show
                    ? "block border-b rounded-lg border-stone-200 bg-stone-200 px-2 "
                    : "hidden"
                }
              >
                <div className="flex justify-start items-start border-b-[0.5px] border-stone-200">
                  <div className="py-3 w-[22%] font-medium whitespace-nowrap pl-3">
                    #2424
                  </div>
                  <div className="py-3 w-[14%] font-medium">&#8377;62</div>
                  <div className="py-3 w-[18%] font-medium px-1">Pending</div>
                  <div className="py-3 w-[20%] font-medium px-1">Pending</div>
                </div>

                <div className="flex justify-start items-start border-b-[0.5px] border-stone-200">
                  <div className="py-3 w-[22%] font-medium whitespace-nowrap pl-3">
                    #2424
                  </div>
                  <div className="py-3 w-[14%] font-medium">&#8377;62</div>
                  <div className="py-3 w-[18%] font-medium px-1">Pending</div>
                  <div className="py-3 w-[20%] font-medium px-1">Pending</div>
                </div>
              </div>
            </div>

            <div className=" text-stone-800 ">
              <div className="flex px-2 justify-between items-start border-b-[0.5px] border-stone-200">
                <div className="py-3 w-[22%] font-medium whitespace-nowrap">
                  #2525
                </div>
                <div className="py-3 w-[14%] font-medium">&#8377;328</div>
                <div className="py-3 w-[18%] font-medium px-1">Pending</div>
                <div className="py-3 w-[20%] font-medium px-1">Pending</div>
                <div className="py-3 pl-1 w-[18%] font-medium">
                  <Link>View</Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-3  w-[8%] font-medium"
                >
                  <RiArrowDownDoubleLine />
                </div>
              </div>

              <div
                className={
                  show
                    ? "block border-b rounded-lg border-stone-200 bg-stone-200 px-2 "
                    : "hidden"
                }
              >
                <div className="flex justify-start items-start border-b-[0.5px] border-stone-200">
                  <div className="py-3 w-[22%] font-medium whitespace-nowrap pl-3">
                    #2525
                  </div>
                  <div className="py-3 w-[14%] font-medium">&#8377;45</div>
                  <div className="py-3 w-[18%] font-medium px-1">Pending</div>
                  <div className="py-3 w-[20%] font-medium px-1">Pending</div>
                </div>

                <div className="flex justify-start items-start border-b-[0.5px] border-stone-200">
                  <div className="py-3 w-[22%] font-medium whitespace-nowrap pl-3">
                    #2525
                  </div>
                  <div className="py-3 w-[14%] font-medium">&#8377;45</div>
                  <div className="py-3 w-[18%] font-medium px-1">Pending</div>
                  <div className="py-3 w-[20%] font-medium px-1">Pending</div>
                </div>
              </div>
            </div>

            {/*  */}
          </div>
        </div>

        {/*  */}
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

export default Orders;
