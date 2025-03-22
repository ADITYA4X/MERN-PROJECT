import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Paintings = ({ title }) => {
  const paintings = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="flex justify-between items-center">
        <button
          onClick={() => previous()}
          className="w-[30px] h-[30px] flex justify-center items-center bg-transparent border border-stone-200"
        >
          <IoIosArrowBack />
        </button>

        <div className="text-2xl font-bold text-stone-600"> {title} </div>

        <button
          onClick={() => next()}
          className="w-[30px] h-[30px] flex justify-center items-center bg-transparent border border-stone-200"
        >
          <IoIosArrowForward />
        </button>
      </div>
    );
  };

  return (
    <div className="flex gap-8 flex-col-reverse">
      <Carousel
        autoPlay={false}
        infinite={false}
        arrows={false}
        responsive={responsive}
        transitionDuration={500}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        {paintings.map((painting, index) => {
          return (
            <div className="flex flex-col justify-start gap-2">
              {painting.map((item, index) => (
                <Link className="flex justify-center items-start" to="#">
                  <img
                    className="w-[110px] h-[110px]"
                    src={`http://localhost:3000/images/paintings/${item}.jpg`}
                    alt=""
                  />
                  <div className="px-3 flex justify-start items-start gap-1 flex-col text-slate-600">
                    <h2>Painting Name </h2>
                    <span className="text-lg font-bold">&#8377; 2000 </span>
                  </div>
                </Link>
              ))}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Paintings;
