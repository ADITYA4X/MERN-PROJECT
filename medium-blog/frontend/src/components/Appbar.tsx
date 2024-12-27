import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between h-[57px] px-7 py-4 items-center">
      <Link
        to={"/blogs"}
        className="text-3xl font-serif font-bold cursor-pointer "
      >
        Medium
      </Link>

      <div className="flex justify-center">
        <Link to={`/publish`}>
          <button className="inline-flex items-center justify-center  h-10 mr-6 text-stone-500  bg-white hover:text-black gap-2">
            <div className="w-6 h-6 ">
              <img
                src="http://localhost:5173/public/images/icons8.png"
                alt=""
              />
            </div>
            <div className="text-[15px]">Write</div>
          </button>
          <Avatar name="aditya" size={"big"} />
        </Link>
      </div>
    </div>
  );
};
