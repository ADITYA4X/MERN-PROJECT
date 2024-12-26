import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between h-[57px] px-7 py-4 items-center">
      <div className="text-3xl font-serif font-bold ">Medium</div>
      <div>
        <Avatar name="aditya" size={"big"} />
      </div>
    </div>
  );
};
