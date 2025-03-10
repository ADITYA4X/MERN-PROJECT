import React, { useEffect, useRef, useState } from "react";
import { TiPlus } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_seller } from "../../store/Reducers/sellerReducer";

const SellerDetails = () => {
  const [show, setShow] = useState(false);

  //   for dropdown button
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  const dispatch = useDispatch();
  const { seller } = useSelector((state) => state.seller);
  const { sellerId } = useParams();

  useEffect(() => {
    dispatch(get_seller(sellerId));
  }, [sellerId]);

  return (
    <div className="lg:px-9 lg:py-10 py-1 px-2">
      <div className="flex lg:hidden justify-between items-center lg:mb-4 mb-1 lg:py-4 py-1 bg-transparent rounded-3xl">
        <button
          onClick={() => setShow(true)}
          className="flex justify-center items-center gap-1 bg-stone-600 text-stone-200 px-6 py-2 rounded-3xl hover:bg-stone-700 "
        >
          Aditya Kumar
          <span>
            <TiPlus />
          </span>
        </button>
      </div>

      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-5/12 lg:pr-3">
          <div className="w-full px-3 pt-2 bg-white rounded-[35px] ">
            <div className="relative md:block ">
              <div className="left-5 transform text-stone-800 text-2xl font-bold px-6 py-4">
                {seller?.name}
              </div>
            </div>

            <div className="w-full flex justify-center bottom-6 right-6 ">
              <div className="w-full pl-3 ">
                <div className=" h-screen lg:h-auto px-3 py lg:rounded-[35px] text-stone-700 transition-all duration-900">
                  <div className="flex justify-center items-center flex-col w-[238px]  h-[238px] cursor-pointer border border-dashed hover:border-stone-800 border-stone-400 rounded-[28px] mb-2">
                    {seller?.image ? (
                      <img
                        src="http://localhost:3002/images/demo.jpg"
                        alt=""
                        className=" rounded-3xl mb-2 "
                      />
                    ) : (
                      <span>Image Not Uploaded </span>
                    )}
                  </div>

                  <div className="relative mt-2  border-b border-t border-stone-500 pb-2 overflow-x-auto">
                    <table className="w-full  text-sm  text-stone-700 ">
                      <thead className="text-[14px] text-stone-700 uppercase text-center ">
                        <tr>
                          <th id="orderId" className="py-3  ">
                            Review
                          </th>
                          <th id="price" className="py-3 ">
                            Art-Form
                          </th>
                        </tr>
                      </thead>

                      <tbody className="text-center">
                        <tr>
                          <td
                            headers="orderId"
                            className="py- font-medium whitespace-nowrap"
                          >
                            {seller?.rating || "09/10"}
                          </td>
                          <td
                            headers="price"
                            className="py-1font-medium whitespace-nowrap"
                          >
                            {seller?.artForm || "Traditional Art Form"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <form className="flex justify-center items-center gap-2 mb-3 mt-1">
                    <select className="w-full bg-stone-500 hover:bg-stone-700  text-white rounded-3xl mt-2 px-2 py-2 text-center">
                      <option className="text-center" value="">
                        --Select Status--
                      </option>
                      <option className="text-center" value="">
                        Active
                      </option>
                      <option className="text-center" value="">
                        Deactive
                      </option>
                    </select>
                    <button className="w-full bg-stone-500 hover:bg-stone-700 hover:shadow-sm text-white rounded-3xl mt-2 px-7 py-2">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div
          className={`w-[360px] lg:w-7/12 translate-x-100 lg:relative lg:right-0 fixed ${
            show ? "right-0  " : "-right-[340px]"
          } z-[99] top-0 transition-all duration-500`}
        >
          <div className="w-full pl-3 ">
            <div
              className={`${
                show ? "bg-stone-400" : "bg-white"
              } " h-screen lg:h-auto px-3 py-2 lg:rounded-[35px] text-stone-700 transition-all duration-900"`}
            >
              <div className="flex justify-between items-center mb-3 mt-4">
                <h1
                  className={`${
                    show ? "text-stone-200 " : "text-stone-800"
                  } 'font-bold text-xl mb-1 w-full text-center'`}
                >
                  Personal Info :
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

              <div className="relative mt-2  border-b border-t border-stone-500 pb-2 overflow-x-auto text-center">
                <table className="w-full  text-sm  text-stone-700 ">
                  <thead className="text-[14px] text-stone-700 uppercase  ">
                    <tr>
                      <th id="orderId" className="py-3  ">
                        Full Name
                      </th>
                      <th id="price" className="py-3 ">
                        Phone Number
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td
                        headers="orderId"
                        className="py- font-medium whitespace-nowrap"
                      >
                        {seller?.name}
                      </td>
                      <td
                        headers="price"
                        className="py-1font-medium whitespace-nowrap"
                      >
                        {seller?.contact || "091-XXXX-XXXX"}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className="w-full  text-sm  text-stone-700  ">
                  <thead className="text-[14px] text-stone-700 uppercase  ">
                    <tr>
                      <th id="email" className="py-3  ">
                        Email
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td
                        headers="email"
                        className="py- font-medium whitespace-nowrap"
                      >
                        {seller?.email}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className="w-full  text-sm  text-stone-700 ">
                  <thead className="text-[14px] text-stone-700 uppercase">
                    <tr>
                      <th id="orderId" className="py-3  ">
                        Status
                      </th>
                      <th id="price" className="py-3 ">
                        Payment
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td
                        headers="orderId"
                        className="py- font-medium whitespace-nowrap"
                      >
                        {seller?.status}
                      </td>
                      <td
                        headers="price"
                        className="py-1font-medium whitespace-nowrap"
                      >
                        {seller?.payment || "Pending"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between items-center mb-3 mt-4">
                <h1
                  className={`${
                    show ? "text-stone-200 " : "text-stone-800"
                  } 'font-bold text-xl mb-1 w-full text-center'`}
                >
                  Shop Info :
                </h1>
              </div>

              <div className="relative mt-2 mb-2  border-b border-t border-stone-500 pb-2 overflow-x-auto">
                <table className="w-full  text-sm  text-stone-700 ">
                  <thead className="text-[14px] text-stone-700 uppercase text-center ">
                    <tr>
                      <th id="orderId" className="py-3  ">
                        Shop Name
                      </th>
                      <th id="price" className="py-3 ">
                        State Name
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-center">
                    <tr>
                      <td
                        headers="orderId"
                        className="py- font-medium whitespace-nowrap"
                      >
                        {seller?.shopInfo?.shopName}
                      </td>
                      <td
                        headers="price"
                        className="py-1font-medium whitespace-nowrap"
                      >
                        {seller?.shopInfo?.state}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className="w-full  text-sm  text-stone-700 ">
                  <thead className="text-[14px] text-stone-700 uppercase text-center ">
                    <tr>
                      <th id="orderId" className="py-3  ">
                        Shop District
                      </th>
                      <th id="price" className="py-3 ">
                        City Name
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-center">
                    <tr>
                      <td
                        headers="orderId"
                        className="py- font-medium whitespace-nowrap"
                      >
                        {seller?.shopInfo?.district}
                      </td>
                      <td
                        headers="price"
                        className="py-1font-medium whitespace-nowrap"
                      >
                        {seller?.shopInfo?.city}
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

export default SellerDetails;
