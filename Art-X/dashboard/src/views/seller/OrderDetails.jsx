import React, { useState } from "react";

import { IoReturnUpBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const OrderDetails = () => {
  const [show, setShow] = useState(false);
  const orderId = 65;

  return (
    <div className="lg:px-9 px:2 lg:py-9 py-3">
      <div className="w-full p-8 bg-white rounded-[35px] ">
        <div>
          <div className="flex justify-between items-center px-4">
            <div className="flex justify-center items-center gap-2">
              <div className="border rounded-lg border-stone-700">
                <Link to="/seller/dashboard/orders" className=" text-3xl">
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
        <div className="flex w-full h-full relative mt-4 p-4 justify-center">
          <div
            className="h-full absolute z-10
             w-full md:left-0 md:relative transition-all rounded-3xl bg-stone-200 pb-8"
          >
            <div className="w-full h-full  overflow-y-auto px-6 rounded-3xl">
              <div className="flex text-xl justify-between items-center p-4  md:p-0 md:px-3 md:pb-3 text-stone-800 mt-4 ">
                <div className="flex gap-2 items-center py-2 text-lg font-bold">
                  <h2>Payment :</h2>
                </div>
              </div>

              <div
                className={`flex gap-6 items-center px-3 pt-2 border-t border-stone-600 `}
              >
                <h1 className="text-base font-semibold">Payment Amount :</h1>
                <span>&#8377; 462</span>
              </div>

              <div
                className={`flex  gap-6 items-center px-3 pb-2 border-b border-stone-600  `}
              >
                <h1 className="text-base font-semibold">Payment Status :</h1>
                <span> Paid</span>
              </div>

              <div
                className={`flex justify-between gap-2 items-center px-3 mt-6`}
              >
                <h1 className="text-lg font-bold py-3"> Deliver To : </h1>
              </div>

              <div
                className={`flex justify-between gap-2 items-center px-3 py-2 border-b border-t border-stone-600`}
              >
                <h1 className="text-base font-semibold">Warehouse</h1>
              </div>

              <div
                className={`flex justify-between gap-2 items-center px-3 mt-6`}
              >
                <h1 className="text-lg font-bold py-3">Art Details :</h1>
              </div>

              <div className="relative mt-2  border-b border-t border-stone-700 pb-2 overflow-x-auto">
                <table className="w-full  text-sm  text-stone-700 ">
                  <thead className="text-[14px] text-stone-700 uppercase text-center ">
                    <tr>
                      <th id="art" className="py-3   ">
                        Art
                      </th>
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
                        headers="art"
                        className=" font-medium whitespace-nowrap"
                      >
                        <img
                          className="w-[45px] h-[45px] inline-block"
                          src={`http://localhost:3001/images/category/1.jpg`}
                          alt="category"
                        />
                      </td>
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
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
