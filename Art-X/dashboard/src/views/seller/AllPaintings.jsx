import React, { useState } from "react";
import Search from "../components/Search";
import Pagination from "../Pagination";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  TbEdit,
  TbEye,
  TbEyeBolt,
  TbEyeCheck,
  TbView360,
  TbViewfinder,
} from "react-icons/tb";

const AllPaintings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const [perPage, setPerPage] = useState(10);
  const options = [5, 10, 20];

  return (
    <div className="lg:px-4 px-2 lg:p-9 py-2  ">
      <h1 className="text-stone-800 font-semibold text-xl mb-4 px-2">
        All Paintings
      </h1>
      <div className="lg:w-full  py-5 lg:px-4 px-[0.5px] bg-white rounded-[35px] overflow-x-auto ">
        <Search
          perPage={perPage}
          setPerPage={setPerPage}
          options={options}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <div className="relative overflow-x-auto mt-6">
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
                <th id="price" scope="col" className="py-3 px-6  font-semibold">
                  Image
                </th>
                <th
                  id="payment"
                  scope="col"
                  className="py-3 px-8  font-semibold"
                >
                  Name
                </th>
                <th
                  id="payment"
                  scope="col"
                  className="py-3 px-8  font-semibold"
                >
                  Type
                </th>
                <th
                  id="payment"
                  scope="col"
                  className="py-3 px-8  font-semibold"
                >
                  Category
                </th>
                <th
                  id="payment"
                  scope="col"
                  className="py-3 px-8  font-semibold"
                >
                  Price
                </th>
                <th
                  id="payment"
                  scope="col"
                  className="py-3 px-4  font-semibold"
                >
                  Discount
                </th>
                <th
                  id="payment"
                  scope="col"
                  className="py-3 px-6  font-semibold"
                >
                  Stock
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
                    Shri Krishna
                  </td>
                  <td
                    headers="payment"
                    className="py-1 px-8 font-medium whitespace-nowrap"
                  >
                    Oil Painting
                  </td>
                  <td
                    headers="payment"
                    className="py-1 px-8 font-medium whitespace-nowrap"
                  >
                    Madhubani
                  </td>
                  <td
                    headers="payment"
                    className="py-1 px-8 font-medium whitespace-nowrap"
                  >
                    2000 &#8377;
                  </td>
                  <td
                    headers="payment"
                    className="py-1 px-8 font-medium whitespace-nowrap"
                  >
                    20%
                  </td>
                  <td
                    headers="payment"
                    className="py-1 px-8 font-medium whitespace-nowrap"
                  >
                    06
                  </td>

                  <td
                    headers="status"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <div className="flex justify-start items-center gap-3">
                      <Link
                        to={`/seller/dashboard/edit-painting/24`}
                        className="p-[6px] bg-stone-300 rounded hover:shadow-lg hover:shadow-stone-500/20"
                      >
                        <TbEdit />
                      </Link>
                      <Link className="p-[6px] bg-stone-300 rounded hover:shadow-lg hover:shadow-stone-500/20">
                        <TbEyeBolt />
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
  );
};

export default AllPaintings;
