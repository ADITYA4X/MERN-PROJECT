import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b-[1.1px] border-stone-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex items-center">
          <Avatar name={`${authorName}`} size={"small"} />

          <div className="font-normal text-sm pl-2">{authorName}</div>

          <div className="pl-2">
            <Circle />
          </div>

          <div className="pl-2 font-thin text-stone-500 text-sm">
            {publishedDate}
          </div>
        </div>

        <div className="text-xl font-bold pt-2">{title}</div>

        <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>

        <div className=" text-stone-500 text-sm font-thin pt-4">{`${Math.ceil(
          content.length / 100
        )} minute(s) read`}</div>
      </div>
    </Link>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-stone-400"></div>;
}

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size: "small" | "big";
}) {
  const initials = name
    .split(" ") // Split the name into an array
    .map((word) => word.charAt(0).toUpperCase()) // Take the first letter and make it uppercase
    .join("");

  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      } overflow-hidden bg-stone-400 rounded-full dark:bg-gray-600`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-md"
        } font-extralight text-gray-100`}
      >
        <span className=" flex ">{initials}</span>
      </span>
    </div>
  );
}
