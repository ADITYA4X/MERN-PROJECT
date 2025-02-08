import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaSearch, FaTrash } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { BiSolidImageAdd } from "react-icons/bi";
import { TiPlus } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../../utils/utils";
import { categoryAdd } from "../../store/Reducers/categoryReducer";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => state.category);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(10);
  const [show, setShow] = useState(false);

  const [imageShow, setImage] = useState("");

  const [state, setState] = useState({
    name: "",
    image: "",
  });

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

  // Dynamic image submit
  const imageHandle = (e) => {
    let files = e.target.files;
    if (files.length > 0) {
      setImage(URL.createObjectURL(files[0]));
      setState({
        ...state,
        image: files[0],
      });
    }
  };

  const add_category = (e) => {
    e.preventDefault();
    dispatch(categoryAdd(state));
    console.log(state);
  };

  return (
    <div className="lg:px-9 px-6 lg:py-9 py-0">
      <div className="flex lg:hidden justify-between items-center lg:mb-4 mb-0 py-4 bg-transparent rounded-3xl">
        <button
          onClick={() => setShow(true)}
          className="flex justify-center items-center gap-1 bg-stone-600 text-stone-200 px-6 py-2 rounded-3xl hover:bg-stone-700 "
        >
          <span>
            <TiPlus />
          </span>
          Add Category
        </button>
      </div>

      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full p-4 bg-white rounded-[35px]">
            <div className="flex justify-between items-center">
              <div className="relative md:block ">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-2 pl-12 py-2 focus:border-stone-400 outline-none border border-stone-300 rounded-3xl text-stone-600 font-normal"
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
                        } ${
                          index === options.length - 1 ? "rounded-b-lg" : ""
                        }`}
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
                      id="orderId"
                      scope="col"
                      className="py-3 px-6 font-semibold"
                    >
                      No.
                    </th>
                    <th
                      id="price"
                      scope="col"
                      className="py-3 px-6  font-semibold"
                    >
                      Image
                    </th>
                    <th
                      id="payment"
                      scope="col"
                      className="py-3 px-8  font-semibold"
                    >
                      Category
                    </th>

                    <th
                      id="status"
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
                        headers="orderId"
                        className="py-1 px-8 font-medium whitespace-nowrap"
                      >
                        {d}
                      </td>
                      <td
                        headers="price"
                        className="py-1 px-6 font-medium whitespace-nowrap"
                      >
                        <img
                          className="w-[45px] h-[45px]"
                          src={`http://localhost:3001/images/category/${d}.jpg`}
                          alt="category"
                        />
                      </td>
                      <td
                        headers="payment"
                        className="py-1 px-8 font-medium whitespace-nowrap"
                      >
                        Paintings
                      </td>

                      <td
                        headers="status"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <div className="flex justify-start items-center gap-3">
                          <Link className="p-[6px] bg-stone-300 rounded hover:shadow-lg hover:shadow-stone-500/20">
                            <TbEdit />
                          </Link>
                          <Link className="p-[6px] bg-stone-300 rounded hover:shadow-lg hover:shadow-stone-500/20">
                            <FaTrash className="text-stone-600" />
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

        <div
          className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${
            show ? "right-0 " : "-right-[340px]"
          } z-[999] top-0 transition-all duration-500`}
        >
          <div className="w-full pl-3 ">
            <div
              className={`${
                show ? "bg-stone-800" : "bg-white"
              } " h-screen lg:h-auto px-3 py-2 lg:rounded-[35px] text-stone-700 transition-all duration-900"`}
            >
              <div className="flex justify-between items-center mt-3">
                <h1
                  className={`${
                    show ? "text-stone-200 underline" : "text-stone-800"
                  } 'font-bold text-lg mb-4 w-full text-center'`}
                >
                  Add Category
                </h1>

                <div
                  onClick={() => setShow(false)}
                  className={`${
                    show
                      ? "bg-stone-200 text-stone-800"
                      : "bg-stone-600 text-stone-100"
                  } "block lg:hidden bg-stone-600 hover:bg-stone-800 -mt-3 rounded-full  p-1"`}
                >
                  <IoCloseSharp />
                </div>
              </div>

              <form onSubmit={add_category}>
                <div className="flex flex-col w-full gap-1 mb-3">
                  <label
                    className={`${
                      show ? " text-stone-100" : " text-stone-800"
                    }`}
                    htmlFor="name"
                  >
                    Category Name :
                  </label>
                  <input
                    value={state.name}
                    onChange={(e) =>
                      setState({ ...state, name: e.target.value })
                    }
                    type="text"
                    placeholder="Type and enter"
                    id="name"
                    name="category_name"
                    className="px-2 pl-4 py-[5px] focus:border-stone-600 outline-none border border-stone-300 rounded-3xl text-stone-600 font-normal"
                  />
                </div>

                <div>
                  <label
                    className="flex justify-center items-center flex-col w-full  h-[238px] cursor-pointer border border-dashed hover:border-stone-800 border-stone-400 rounded-[28px]"
                    htmlFor="image"
                  >
                    {imageShow ? (
                      <img
                        alt="img"
                        className="w-full h-full rounded-[28px]"
                        src={imageShow}
                      />
                    ) : (
                      <>
                        <span className="text-2xl text-stone-400 hover:text-stone-700">
                          <BiSolidImageAdd />
                        </span>
                        <span
                          className={`${
                            show ? " text-stone-100" : " text-stone-600"
                          }`}
                        >
                          Select Image
                        </span>
                      </>
                    )}
                  </label>
                  <input
                    onChange={imageHandle}
                    className="hidden"
                    type="file"
                    name="image"
                    id="image"
                  />
                  <div className="mt-1 mb-1">
                    <button
                      disabled={loader ? true : false}
                      className="w-full bg-stone-500 hover:bg-stone-700 hover:shadow-sm text-white rounded-3xl mt-2 px-7 py-2"
                    >
                      {loader ? (
                        <PropagateLoader
                          color="#aaa"
                          cssOverride={overrideStyle}
                        />
                      ) : (
                        "Add Category"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
