/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { RiListView } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import Search from "../components/Search";
import { get_seller_request } from "../../store/Reducers/sellerReducer";

const SellerRequest = () => {
  const dispatch = useDispatch();
  const { sellers, totalSeller } = useSelector((state) => state.seller);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(10);
  const [show, setShow] = useState(false);

  const options = [10, 20];

  useEffect(() => {
    dispatch(
      get_seller_request({
        perPage: parseInt(perPage),
        page: parseInt(currentPage),
        searchValue,
      })
    );
  }, [searchValue, currentPage, perPage]);

  return (
    <div className="lg:px-9 lg:py-10 py-2 px-2">
      <div className="w-full p-4 bg-white rounded-[35px]">
        <div className="flex justify-between items-center mb-1 py-1 ">
          <h1 className="font-semibold lg:text-xl text-lg text-stone-700 pl-4">
            Seller Request
          </h1>

          <Search
            perPage={perPage}
            setPerPage={setPerPage}
            options={options}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full  text-sm text-left text-stone-700 ">
            <thead className="text-[14px] text-stone-700 uppercase  border-b border-stone-400">
              <tr>
                <th
                  id="serialNo"
                  scope="col"
                  className="py-3 px-6 font-semibold"
                >
                  No.
                </th>

                <th id="name" scope="col" className="py-3 px-8  font-semibold">
                  Name
                </th>

                <th id="email" scope="col" className="py-3 px-8  font-semibold">
                  Email
                </th>
                <th
                  id="payment"
                  scope="col"
                  className="py-3 pl-7  font-semibold"
                >
                  Payment Status
                </th>
                <th
                  id="status"
                  scope="col"
                  className="py-3 px-8  font-semibold"
                >
                  Status
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
              {sellers.map((d, i) => (
                <tr key={i} className="border-b border-stone-200">
                  <td
                    headers="serialNo"
                    className="py-2 px-8 font-medium whitespace-nowrap "
                  >
                    {i + 1}
                  </td>

                  <td
                    headers="name"
                    className="py-2 px-8 font-medium whitespace-nowrap "
                  >
                    {d.name}
                  </td>
                  <td
                    headers="email"
                    className="py-2 px-8 font-medium whitespace-nowrap"
                  >
                    {d.email}
                  </td>
                  <td
                    headers="payment"
                    className="py-2 px-8 font-medium whitespace-nowrap"
                  >
                    <span>{d.payment}</span>
                  </td>
                  <td
                    headers="status"
                    className="py-2 px-8 font-medium whitespace-nowrap"
                  >
                    <span>{d.status}</span>
                  </td>

                  <td
                    headers="action"
                    className="py-2 px-6 font-medium whitespace-nowrap"
                  >
                    <div className="flex justify-start items-center gap-3">
                      <Link
                        to={`/admin/dashboard/sellers/details/${d._id}`}
                        className="p-[6px] bg-stone-600 rounded hover:shadow-lg hover:shadow-stone-500/20"
                      >
                        <RiListView className="text-white" />
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

export default SellerRequest;
