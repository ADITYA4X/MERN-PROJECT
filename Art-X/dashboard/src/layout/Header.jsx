import React from "react";
import { FaList } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full py-3 px-2 lg:px-7 z-40 bg-white">
      <div className="ml-0 lg:ml-[310px] h-[130px] flex justify-between items-center px-5 transition-all ">
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-[35px] flex lg:hidden h-[35px] rounded-sm bg-transparent text-stone-700 text-2xl shadow-lg hover:bg-white hover:text-black hover:shadow-gray-300/50 justify-center items-center cursor-pointer"
        >
          <span>
            <FaList />
          </span>
        </div>

        <div className="relative hidden lg:block">
          <div className="md:block flex justify-center items-center flex-col">
            <h1 className="text-black text-[42px] font-semibold md:text-[36px] mb-1">
              Welcome back,
            </h1>
            <span className="text-[#737374] font-semibold">
              Here are today's stats from your Art-X store!
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[130px]">
          <div className="relative hidden md:block left-16">
            <input
              className="h-[48px] pl-14 pr-1 py-1 outline-none border border-stone-400 bg-stone-200 rounded-full text-stone-800 text-lg font-semibold overflow-hidden focus:outline-none focus:ring-1 focus:ring-stone-300
              focus:w-80 transition-all duration-500"
              type="text"
              name="search"
              placeholder="Search"
            />
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-stone-700 text-lg">
              <FaSearch />
            </div>
          </div>

          <div className="flex justify-center items-center gap-8 relative text-stone-600">
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center gap-3">
                <div className="flex justify-center items-center flex-col text-end">
                  <h1 className="text-lg font-bold">Aditya Kumar</h1>
                  <span className="text-[#737374] font-semibold w-full">
                    Admin
                  </span>
                </div>
                <img
                  className="w-[42px] h-[42px] rounded-full overflow-hidden"
                  src="http://localhost:3002/images/admin.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
