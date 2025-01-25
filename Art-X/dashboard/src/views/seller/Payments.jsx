import React, { forwardRef } from "react";
import { MdCurrencyRupee } from "react-icons/md";

import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const Payments = () => {
  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm border-b border-stone-200">
        <div className="w-[25%] py-2 px-7 whitespace-nowrap">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-nowrap">$2424</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <span className="py-[1px] px-[5px] bg-stone-200 text-stone-800 rounded-xl text-sm ">
            Pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap">19 Dec 2024</div>
      </div>
    );
  };

  return (
    <div className="px-9 md:px-9 py-10">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-9 mb-8">
        <div className="flex flex-col p-5 bg-white rounded-[34px] gap-3  ">
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col justify-start items-start ">
              <h2 className="text-3xl font-bold text-stone-800">
                &#8377; 3434
              </h2>
              <span className="text-xl font-medium text-stone-600">
                Total Sales Amount
              </span>
            </div>
            <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center text-4xl  border-2 border-stone-600">
              <MdCurrencyRupee className="text-stone-600" />
            </div>
          </div>
        </div>

        <div className="flex flex-col p-5 bg-white rounded-[34px] gap-3 ">
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col justify-start items-start ">
              <h2 className="text-3xl font-bold text-stone-800">&#8377; 600</h2>
              <span className="text-xl font-medium text-stone-600">
                Available Amount
              </span>
            </div>
            <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center text-4xl  border-2 border-stone-600">
              <MdCurrencyRupee className="text-stone-600 " />
            </div>
          </div>
        </div>

        <div className="flex flex-col p-5 bg-white rounded-[34px] gap-3">
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-start items-start text-white">
              <h2 className="text-3xl font-bold text-stone-800">&#8377; 200</h2>
              <span className="text-xl font-medium text-stone-600">
                Withdrawl Amount
              </span>
            </div>
            <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center text-4xl  border-2 border-stone-600">
              <MdCurrencyRupee className="text-stone-700 " />
            </div>
          </div>
        </div>

        <div className="flex flex-col p-5 bg-white rounded-[34px] gap-3">
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-start items-start text-white">
              <h2 className="text-3xl font-bold text-stone-800">&#8377; 00</h2>
              <span className="text-xl font-medium text-stone-600">
                Pending Amount
              </span>
            </div>
            <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center text-4xl  border-2 border-stone-600">
              <MdCurrencyRupee className="text-stone-700 " />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
        <div className="bg-white text-black rounded-3xl p-5">
          <h2 className="text-xl font-semibold">Send Request</h2>
          <div className="pt-5 mb-5">
            <form>
              <div className="flex gap-3 flex-wrap">
                <input
                  min="0"
                  type="number"
                  className="px-3 py-2 md:w-[79%] focus:border-stone-700 outline-none bg-stone-300 border border-stone-400 rounded-3xl text-stone-900"
                  name="amount"
                />
                <button className="bg-stone-900 border border-black  hover:border-stone-400 hover:shadow-md text-white rounded-3xl px-7 py-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-xl pb-4 font-semibold">Pending Request </h2>

            <div className="w-full overflow-x-auto">
              <div className="flex bg-white uppercase text-md min-w-[340px]  font-semibold   text-stone-900  border-b border-stone-400 px-2">
                <div className="w-[25%] px-4 py-2">No</div>
                <div className="w-[25%] p-2">Amount</div>
                <div className="w-[25%] p-2">Status</div>
                <div className="w-[25%] py-2 px-4">Date</div>
              </div>
              {
                <List
                  style={{ minWidth: "340px" }}
                  className="List font-semibold"
                  height={600}
                  itemCount={17}
                  itemSize={33}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>

        <div className="bg-white text-black rounded-3xl p-5">
          <div>
            <h2 className="text-xl pb-4 font-semibold">Success Withdrawal </h2>
            <div className="w-full overflow-x-auto">
              <div className="flex bg-white uppercase text-md min-w-[340px]  font-semibold   text-stone-900  border-b border-stone-400 px-2">
                <div className="w-[25%] px-4 py-2">No</div>
                <div className="w-[25%] p-2">Amount</div>
                <div className="w-[25%] p-2">Status</div>
                <div className="w-[25%] py-2 px-4">Date</div>
              </div>
              {
                <List
                  style={{ minWidth: "340px" }}
                  className="List font-semibold"
                  height={700}
                  itemCount={20}
                  itemSize={33}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
