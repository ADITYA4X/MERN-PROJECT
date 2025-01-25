import React, { useState } from "react";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { FaList } from "react-icons/fa";

const SellerToCustomer = () => {
  const [show, setShow] = useState(false);
  const sellerId = 65;

  return (
    <div className="lg:px-9 px:2 lg:py-9 py-3">
      <div className="w-full p-2 bg-white rounded-[35px] h-[calc(100vh-200px)]">
        <div className="flex w-full h-full relative gap-2">
          <div
            className={`w-[300px] h-full absolute z-10 ${
              show ? "-left-[16px] ml-2 " : "-left-[336px]"
            } md:left-0 md:relative transition-all bg-stone-200 rounded-3xl`}
          >
            <div className="w-full h-full bg-stone-400 md:bg-transparent overflow-y-auto rounded-3xl ">
              <div className="flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-stone-800 mt-4">
                <div className="flex gap-2 items-center py-2 text-lg font-bold">
                  <HiMiniChatBubbleLeftRight />
                  <h2>Customers Live Chat</h2>
                </div>
                <span
                  onClick={() => setShow(!show)}
                  className="block cursor-pointer md:hidden text-black"
                >
                  <IoMdClose />
                </span>
              </div>

              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-stone-700 px-2 py-2 rpunded-sm cursor-pointer bg-stone-300`}
              >
                <div className="relative ">
                  <img
                    src="http://localhost:3001/images/admin.jpg"
                    alt=""
                    className="w-[38px] h-[38px] border-stone-500 max-w-[38px] p-[2px] rounded-full"
                  />
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>

                <div className="flex justify-center items-center flex-col w-full ">
                  <div className="flex justify-between items-center w-full">
                    <h1 className="text-base font-semibold">B6 Kumar</h1>
                  </div>
                </div>
              </div>

              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-stone-700 px-2 py-2 rpunded-sm cursor-pointer`}
              >
                <div className="relative ">
                  <img
                    src="http://localhost:3001/images/admin.jpg"
                    alt=""
                    className="w-[38px] h-[38px] border-stone-500 max-w-[38px] p-[2px] rounded-full"
                  />
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>

                <div className="flex justify-center items-center flex-col w-full ">
                  <div className="flex justify-between items-center w-full">
                    <h1 className="text-base font-semibold">X6 Kumar</h1>
                  </div>
                </div>
              </div>

              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-stone-700 px-2 py-2 rpunded-sm cursor-pointer`}
              >
                <div className="relative ">
                  <img
                    src="http://localhost:3001/images/admin.jpg"
                    alt=""
                    className="w-[38px] h-[38px] border-stone-500 max-w-[38px] p-[2px] rounded-full"
                  />
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>

                <div className="flex justify-center items-center flex-col w-full ">
                  <div className="flex justify-between items-center w-full">
                    <h1 className="text-base font-semibold">X9 Kumar</h1>
                  </div>
                </div>
              </div>

              {/*  */}
            </div>
          </div>

          {/*  */}
          <div className="w-full md:w-[calc(100%-200px)] md:pl-4 bg-stone-200 rounded-3xl px-2 ">
            <div className="flex justify-between items-center ">
              {sellerId ? (
                <div className="flex justify-start items-center gap-3 m-4 ml-0 ">
                  <div className="relative ">
                    <img
                      src="http://localhost:3001/images/admin.jpg"
                      alt=""
                      className="w-[45px] h-[45px] border-green-500 border-2 max-w-[45px] p-[2px] rounded-full"
                    />
                    <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                  </div>

                  <h2 className="text-base font-semibold">A1 Kumar</h2>
                </div>
              ) : (
                ""
              )}

              <div
                onClick={() => setShow(!show)}
                className="w-[35px] flex md:hidden h-[35px] rounded-lg bg-stone-200 shadow-lg hover:shadow-stone-500/50 justify-center cursor-pointer items-center text-stone-900 m-4 "
              >
                <span>
                  <FaList />
                </span>
              </div>
            </div>
            {/*  */}

            <div className="py-1">
              <div className="bg-white h-[calc(100vh-370px)] rounded-3xl overflow-y-auto ">
                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%] mt-2">
                    <div>
                      <img
                        src="http://localhost:3001/images/admin.jpg"
                        alt=""
                        className="w-[38px] h-[38px] border-2 border-green-200 rounded-full max-w-[38px] p-[3px]"
                      />
                    </div>
                    <div className="flex justify-center items-start flex-col w-full bg-green-100 shadow-lg shadow-green-600/20 text-stone-700 py-1 px-2 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl">
                      <span>Hey, Aditya How's Going..?</span>
                    </div>
                  </div>
                </div>
                {/*  */}

                <div className="w-full flex justify-end items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%] mt-2">
                    <div className="flex justify-center items-start flex-col w-full bg-orange-100 shadow-lg shadow-orange-600/20 text-stone-700 py-1 px-2 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl">
                      <span>Hey, B6 How's Going..?</span>
                    </div>
                    <div>
                      <img
                        src="http://localhost:3001/images/admin.jpg"
                        alt=""
                        className="w-[38px] h-[38px] border-2 border-orange-300 rounded-full max-w-[38px] p-[3px]"
                      />
                    </div>
                  </div>
                </div>
                {/*  */}

                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%] mt-2">
                    <div>
                      <img
                        src="http://localhost:3001/images/admin.jpg"
                        alt=""
                        className="w-[38px] h-[38px] border-2 border-green-200 rounded-full max-w-[38px] p-[3px]"
                      />
                    </div>
                    <div className="flex justify-center items-start flex-col w-full bg-green-100 shadow-lg shadow-green-600/20 text-stone-700 py-1 px-2 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl">
                      <span>Aditya, I need some help</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form className="flex gap-3 mt-2">
              <input
                type="text"
                placeholder="Input Your Message"
                className="w-full flex justify-between items-center  border border-stone-400  py-[15px] focus:border-stone-700 rounded-3xl outline-none bg-white text-stone-800 px-2"
              />
              <button className="shadow-lg bg-stone-400 hover:bg-stone-700 hover:text-white text-semibold w-[75px] rounded-3xl flex justify-center items-center">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerToCustomer;
