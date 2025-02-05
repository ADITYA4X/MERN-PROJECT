/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../navigation/index";
import { TbLogout2 } from "react-icons/tb";
import { MdOutlineDateRange } from "react-icons/md";
import { TiTime } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth);

  const { pathname } = useLocation();
  const [allNav, setAllNav] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const navs = getNav(role);
    setAllNav(navs);
  }, [role]);
  // console.log(allNav);

  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format the date (e.g., 15 Dec 2024)
  const day = currentTime.getDate();
  const month = currentTime.toLocaleString("default", { month: "short" });
  const year = currentTime.getFullYear();

  let hours = currentTime.getHours();
  const minutes = currentTime.getMinutes().toString().padStart(2, "0"); // Ensure two digits for minutes
  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return (
    <div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed duration-200 ${
          !showSidebar ? "invisible" : "visible"
        } w-screen h-screen bg-black opacity-50 top-0 left-0 z-10`}
      ></div>

      <div
        className={`w-[310px] fixed bg-stone-950 z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_10%)] transition-all ${
          showSidebar ? "left-0 overflow-y-auto" : "-left-[310px] lg:left-0"
        }`}
      >
        <div className="h-[70px] flex justify-center items-center">
          <Link to="/" className="w-[200px] h-[90px] ml-[-92px]">
            <img
              className="w-full"
              src="http://localhost:3001/images/logo3.png"
              alt=""
            />
          </Link>
        </div>
        <div className="px-[4px] mt-[120px] ">
          <ul>
            {allNav.map((n, i) => (
              <li key={i}>
                <Link
                  to={n.path}
                  className={`${
                    pathname === n.path
                      ? "text-white duration-500 border-l-4 border-white ml-[-2px] "
                      : "text-gray-500  duration-200"
                  } px-[32px] py-[2px] flex justify-start items-center gap-[12px] hover:pl-[36px] transition-all w-full mb-6 text-xl font-bold`}
                >
                  <span>{n.icon}</span>
                  <span>{n.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-[4px] mt-[110px]">
            <li>
              <button className="text-gray-500 font-bold duration-200 px-[32px] py-[2px] flex justify-start items-center gap-[12px] hover:pl-[36px] transition-all w-full mb-2 text-xl ">
                <span>
                  <TbLogout2 />
                </span>
                <span>Log out</span>
              </button>
            </li>
          </div>

          <div className="px-[4px] mt-[32px] ">
            <li>
              <button className="text-gray-400 font-bold duration-200 px-[32px]  flex justify-start items-center gap-[12px]  w-full text-lg ">
                <span className="text-xl">
                  <MdOutlineDateRange />
                </span>
                <span>
                  Today is {day} {month} {year}
                </span>
              </button>
            </li>
            <li>
              <button className="text-gray-400 font-bold duration-200 px-[32px] flex justify-start items-center gap-[12px]  w-full text-lg ">
                <span className="text-xl">
                  <TiTime />
                </span>
                <span>
                  It&apos;s {hours}:{minutes} {amPm} now.
                </span>
              </button>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
