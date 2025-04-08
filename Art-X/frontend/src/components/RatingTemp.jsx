import React from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const RatingTemp = ({ rating }) => {
  if (rating === 5) {
    return (
      <>
        <span className="text-stone-900">
          <FaStar />
        </span>
        <span className="text-stone-900">
          <FaStar />
        </span>
        <span className="text-stone-900">
          <FaStar />
        </span>
        <span className="text-stone-900">
          <FaStar />
        </span>
        <span className="text-stone-900">
          <FaStar />
        </span>
      </>
    );
  } else if (rating === 4) {
    return (
      <>
        <span className="text-stone-900">
          <FaStar />
        </span>
        <span className="text-stone-900">
          <FaStar />
        </span>
        <span className="text-stone-900">
          <FaStar />
        </span>
        <span className="text-stone-900">
          <FaStar />
        </span>
        <span className="text-stone-900">
          <CiStar />
        </span>
      </>
    );
  } else if (rating === 3) {
    return (
      <>
        <span className="text-stone-900">
          <FaStar />
        </span>
        <span className="text-stone-900">
          <FaStar />
        </span>
        <span className="text-stone-900">
          <FaStar />
        </span>
        <span className="text-stone-900">
          <CiStar />
        </span>
        <span className="text-stone-900">
          <CiStar />
        </span>
      </>
    );
  } else if (rating === 2) {
    return (
      <>
        <span className="text-stone-900">
          <FaStar />
        </span>
        <span className="text-stone-900">
          <FaStar />
        </span>
        <span className="text-stone-900">
          <CiStar />
        </span>
        <span className="text-stone-900">
          <CiStar />
        </span>
        <span className="text-stone-900">
          <CiStar />
        </span>
      </>
    );
  } else if (rating === 1) {
    return (
      <>
        <span className="text-stone-900">
          <FaStar />
        </span>
        <span className="text-stone-900">
          <CiStar />
        </span>
        <span className="text-stone-900">
          <CiStar />
        </span>
        <span className="text-stone-900">
          <CiStar />
        </span>
        <span className="text-stone-900">
          <CiStar />
        </span>
      </>
    );
  } else {
    return (
      <>
        <span className="text-stone-900">
          <CiStar />
        </span>
        <span className="text-stone-900">
          <CiStar />
        </span>
        <span className="text-stone-900">
          <CiStar />
        </span>
        <span className="text-stone-900">
          <CiStar />
        </span>
        <span className="text-stone-900">
          <CiStar />
        </span>
      </>
    );
  }
};

export default RatingTemp;
