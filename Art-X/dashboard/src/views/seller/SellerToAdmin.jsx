import React, { useState } from "react";

const SellerToAdmin = () => {
  return (
    <div className="lg:px-9 px:2 lg:py-9 py-3">
      <div className="w-full p-2 bg-white rounded-[35px] h-[calc(100vh-200px)]">
        <div className="flex w-full h-full relative gap-2">
          {/*  */}
          <div className="w-full  md:pl-4 bg-stone-200 rounded-3xl px-2 ">
            <div className="flex justify-between items-center ">
              <div className="flex justify-start items-center gap-3 m-4 ml-0 ">
                <div className="relative ">
                  <img
                    src="http://localhost:3001/images/admin.jpg"
                    alt=""
                    className="w-[45px] h-[45px] border-green-500 border-2 max-w-[45px] p-[2px] rounded-full"
                  />
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>

                <h2 className="text-base font-semibold">Support</h2>
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

export default SellerToAdmin;
