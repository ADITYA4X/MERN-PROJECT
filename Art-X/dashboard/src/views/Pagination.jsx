import React from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({
  pageNumber,
  setPageNumber,
  totalItem,
  perPage,
  showItem,
}) => {
  let totalPage = Math.ceil(totalItem / perPage);
  let startPage = pageNumber;

  let diff = totalPage - pageNumber;
  if (diff <= showItem) {
    startPage = totalPage - showItem;
  }
  let endPage = startPage < 0 ? showItem : showItem + startPage;

  if (startPage <= 0) {
    startPage = 1;
  }

  const createBtn = () => {
    const btns = [];
    for (let i = startPage; i < endPage; i++) {
      btns.push(
        <li
          onClick={() => setPageNumber(i)}
          className={`${
            pageNumber === i
              ? "bg-stone-500 shadow-lg shadow-stone-400/50 text-stone-200"
              : "bg-white hover:bg-stone-400 shadow-lg hover:shadow-stone-500/50 hover:text-stone-300 text-stone-700"
          } w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer `}
        >
          {i}
        </li>
      );
    }
    return btns;
  };

  return (
    <ul className="flex gap-3">
      {pageNumber > 1 && (
        <li
          onClick={() => setPageNumber(pageNumber - 1)}
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-white text-stone-500 hover:text-black cursor-pointer"
          key={0}
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </li>
      )}{" "}
      {createBtn()}
      {pageNumber < totalPage && (
        <li
          onClick={() => setPageNumber(pageNumber + 1)}
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-white text-stone-500 hover:text-black cursor-pointer"
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
