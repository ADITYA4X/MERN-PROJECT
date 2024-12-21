import React, { useState } from "react";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { IoReturnUpBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const OrderDetails = () => {
  const [show, setShow] = useState(false);
  const orderId = 65;

  return (
    <div className="lg:px-9 px:2 lg:py-9 py-3">
      <div className="w-full p-2 bg-white rounded-[35px] h-[calc(100vh-480px)] py-4">
        <div>
          <div className="flex justify-between items-center px-4">
            <div className="flex justify-center items-center gap-2">
              <div className="border rounded-lg border-stone-700">
                <Link to="/admin/dashboard/orders" className=" text-3xl">
                  <IoReturnUpBack />
                </Link>
              </div>
              <div className="relative text-[33px] font-semibold  ">
                #S-242424
              </div>
            </div>

            <select className="w-[150px] bg-stone-500 hover:bg-stone-700  text-white rounded-2xl mt-2 px-2 py-2 text-center">
              <option className="text-center" value="">
                Pending
              </option>
              <option className="text-center" value="">
                Processing
              </option>
              <option className="text-center" value="">
                Warehouse
              </option>
              <option className="text-center" value="">
                Placed
              </option>
              <option className="text-center" value="">
                Cancelled
              </option>
            </select>
          </div>

          <div className="ml-14">
            Order Details / S - 242424 - Dec, 22 2024 at 9.30 pm{" "}
          </div>
        </div>

        {/*  */}
        <div className="flex w-full h-[420px] relative gap-2 mt-4">
          <div
            className={`lg:w-[1000px] w-[400px] h-full absolute z-10 ${
              show ? "-left-[16px] ml-2 " : "-left-[400px]"
            } md:left-0 md:relative transition-all bg-stone-200 rounded-3xl`}
          >
            <div className="w-full h-full bg-stone-400 md:bg-transparent overflow-y-auto rounded-3xl ">
              <div className="flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-stone-800 mt-4 ">
                <div className="flex gap-2 items-center py-2 text-lg font-bold">
                  <h2>Payment</h2>
                </div>
                <span
                  onClick={() => setShow(!show)}
                  className="block cursor-pointer md:hidden text-black"
                >
                  <IoMdClose />
                </span>
              </div>

              <div
                className={`flex justify-between gap-2 items-center px-3 pt-2 border-t border-stone-600 `}
              >
                <h1 className="text-base font-semibold">Payment Amount :</h1>
                <span>&#8377; 462</span>
              </div>

              <div
                className={`flex justify-between gap-2 items-center px-3 pb-2 border-b border-stone-600  `}
              >
                <h1 className="text-base font-semibold">Payment Status :</h1>
                <span> Paid</span>
              </div>

              <div
                className={`flex justify-between gap-2 items-center px-3 mt-2 `}
              >
                <h1 className="text-lg font-bold py-3">Shipping Details</h1>
              </div>

              <div
                className={`flex justify-between gap-2 items-center px-3 py-2 border-b border-t border-stone-600`}
              >
                <h1 className="text-base font-semibold">
                  99, Main Street, Bakers House, Pune, Maharastra, 220011
                </h1>
              </div>

              <div
                className={`flex justify-between gap-2 items-center px-3 mt-2`}
              >
                <h1 className="text-lg font-bold py-3">Shipping Details</h1>
              </div>

              <div className="relative mt-2  border-b border-t border-stone-700 pb-2 overflow-x-auto">
                <table className="w-full  text-sm  text-stone-700 ">
                  <thead className="text-[14px] text-stone-700 uppercase text-center ">
                    <tr>
                      <th id="artId" className="py-3  ">
                        Art-Id
                      </th>
                      <th id="artType" className="py-3 ">
                        Art-Type
                      </th>
                      <th id="quantity" className="py-3 ">
                        Art-Qts
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-center">
                    <tr>
                      <td
                        headers="artId"
                        className=" font-medium whitespace-nowrap"
                      >
                        X-864
                      </td>
                      <td
                        headers="artType"
                        className="font-medium whitespace-nowrap"
                      >
                        Canvas
                      </td>
                      <td
                        headers="price"
                        className="font-medium whitespace-nowrap"
                      >
                        2
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/*  */}
            </div>
          </div>

          {/*  */}
          <div className="lg:w-full w-[calc(100vh-300px)] md:pl-4 bg-stone-200 rounded-3xl px-2 ">
            <div className=" ">
              <div className="">
                <div
                  onClick={() => setShow(!show)}
                  className="w-[35px] flex md:hidden h-[35px] rounded-lg bg-stone-200 shadow-lg hover:shadow-stone-500/50 justify-center cursor-pointer items-center text-stone-900 m-4 "
                >
                  <span>
                    <FaList />
                  </span>
                </div>
              </div>

              <div
                className={`flex justify-between gap-2 items-center px-3 mt-8  `}
              >
                <h1 className="text-base font-semibold">Deliver To :</h1>
                <span>BE-6 Kumar</span>
              </div>

              <div className="relative mt-[20px]  border-b border-t border-stone-700 pb-2 overflow-x-auto">
                <table className="w-full  text-sm  text-stone-700 ">
                  <thead className="text-[14px] text-stone-700 uppercase text-center ">
                    <tr>
                      <th id="seller" className="py-3  ">
                        Seller-1
                      </th>
                      <th id="order" className="py-3 ">
                        Order
                      </th>
                      <th id="artType" className="py-3 ">
                        Type
                      </th>
                      <th id="quantity" className="py-3 ">
                        Art-Qts
                      </th>
                      <th id="status" className="py-3 ">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-center">
                    <tr>
                      <td
                        headers="artId"
                        className=" font-medium whitespace-nowrap"
                      >
                        <img
                          className="w-[45px] h-[45px] inline-block"
                          src={`http://localhost:3001/images/category/2.jpg`}
                          alt="category"
                        />
                      </td>
                      <td
                        headers="order"
                        className="font-medium whitespace-nowrap"
                      >
                        Pending
                      </td>
                      <td
                        headers="artType"
                        className="font-medium whitespace-nowrap"
                      >
                        Canvas
                      </td>
                      <td
                        headers="price"
                        className="font-medium whitespace-nowrap"
                      >
                        2
                      </td>
                      <td
                        headers="status"
                        className="font-medium whitespace-nowrap"
                      >
                        Packaging
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="relative mt-[20px]  border-b border-t border-stone-700 pb-2 overflow-x-auto">
                <table className="w-full  text-sm  text-stone-700 ">
                  <thead className="text-[14px] text-stone-700 uppercase text-center ">
                    <tr>
                      <th id="seller" className="py-3   ">
                        Seller-2
                      </th>
                      <th id="order" className="py-3 ">
                        Order
                      </th>
                      <th id="artType" className="py-3 ">
                        Type
                      </th>
                      <th id="quantity" className="py-3 ">
                        Art-Qts
                      </th>
                      <th id="status" className="py-3 ">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-center">
                    <tr>
                      <td
                        headers="artId"
                        className=" font-medium whitespace-nowrap"
                      >
                        <img
                          className="w-[45px] h-[45px] inline-block"
                          src={`http://localhost:3001/images/category/1.jpg`}
                          alt="category"
                        />
                      </td>
                      <td
                        headers="order"
                        className="font-medium whitespace-nowrap"
                      >
                        Pending
                      </td>
                      <td
                        headers="artType"
                        className="font-medium whitespace-nowrap"
                      >
                        Madhubani
                      </td>
                      <td
                        headers="price"
                        className="font-medium whitespace-nowrap"
                      >
                        2
                      </td>
                      <td
                        headers="status"
                        className="font-medium whitespace-nowrap"
                      >
                        Packaging
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
