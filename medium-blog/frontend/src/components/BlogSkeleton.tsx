import { Circle } from "./BlogCard";

export const BlogSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="p-4 border-b-[1.1px] border-stone-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex items-center">
          <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>

          <div className="pl-2 font-thin text-stone-500 text-sm">
            <div className="pl-2">
              <Circle />
            </div>
          </div>
        </div>

        <div className="text-xl font-bold pt-2">
          {" "}
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>

        <div className="text-md font-thin">
          {" "}
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>

        <div className=" text-stone-500 text-sm font-thin pt-4">
          {" "}
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5">
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          </div>
        </div>

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
