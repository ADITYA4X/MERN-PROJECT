import { MdDashboard } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { BiSolidCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { IoIosCard } from "react-icons/io";
import { FaUserTimes } from "react-icons/fa";
import { RiGitPullRequestLine } from "react-icons/ri";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";

export const allNav = [
  {
    id: 1,
    title: "Dashboard",
    icon: <MdDashboard />,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Orders",
    icon: <CiViewList />,
    role: "admin",
    path: "/admin/dashboard/orders",
  },
  {
    id: 3,
    title: "Category",
    icon: <BiSolidCategory />,
    role: "admin",
    path: "/admin/dashboard/category",
  },
  {
    id: 4,
    title: "Sellers",
    icon: <FaUsers />,
    role: "admin",
    path: "/admin/dashboard/sellers",
  },
  {
    id: 5,
    title: "Payment Request",
    icon: <IoIosCard />,
    role: "admin",
    path: "/admin/dashboard/payment-request",
  },
  {
    id: 6,
    title: "Deactive Sellers",
    icon: <FaUserTimes />,
    role: "admin",
    path: "/admin/dashboard/deactive-sellers",
  },
  {
    id: 7,
    title: "Seller Request",
    icon: <RiGitPullRequestLine />,
    role: "admin",
    path: "/admin/dashboard/sellers-request",
  },
  {
    id: 8,
    title: "Live Chat",
    icon: <HiMiniChatBubbleLeftRight />,
    role: "admin",
    path: "/admin/dashboard/chat-seller",
  },
];
