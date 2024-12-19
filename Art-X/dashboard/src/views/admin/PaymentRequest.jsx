import React, { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const PaymentRequest = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        <div className="w-[25%] p-2 whitespace-nowrap">
          <button className="bg-stone-400 rounded-2xl hover:bg-stone-800 hover:text-white px-3 py-[2px] cursor-pointer text-stone-950 text-sm ">
            Confirm
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="px-9 md:px-9 py-10">
      <div className="w-full p-4 bg-white rounded-[35px]">
        <h2 className="text-xl text-stone-700 font-medium pb-5">
          Withdrawal Request
        </h2>
        <div className="w-full">
          <div className="w-full overflow-x-auto">
            <div className="flex bg-stone-100 uppercase text-sm min-w-[340px]  font-semibold rounded-md  text-stone-800  border-b border-stone-400 px-2">
              <div className="w-[25%] px-4 py-2">No</div>
              <div className="w-[25%] p-2">Amount</div>
              <div className="w-[25%] p-2">Status</div>
              <div className="w-[25%] py-2 px-4">Date</div>
              <div className="w-[25%] py-2 px-2">Action</div>
            </div>
            {
              <List
                style={{ minWidth: "340px" }}
                className="List"
                height={500}
                itemCount={100}
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
  );
};

export default PaymentRequest;
