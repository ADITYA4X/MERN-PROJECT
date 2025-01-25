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
    path: "/admin/dashboard/chat-sellers",
  },
  {
    id: 9,
    title: "Dashboard",
    icon: <MdDashboard />,
    role: "seller",
    path: "/seller/dashboard",
  },
  {
    id: 10,
    title: "Add Painting",
    icon: <MdDashboard />,
    role: "seller",
    path: "/seller/dashboard/add-painting",
  },
  {
    id: 11,
    title: "All Paintings",
    icon: <MdDashboard />,
    role: "seller",
    path: "/seller/dashboard/all-paintings",
  },
  {
    id: 12,
    title: "Discount Paintings",
    icon: <MdDashboard />,
    role: "seller",
    path: "/seller/dashboard/discount-paintings",
  },
  {
    id: 13,
    title: "Orders",
    icon: <MdDashboard />,
    role: "seller",
    path: "/seller/dashboard/orders",
  },
  {
    id: 14,
    title: "Payments ",
    icon: <MdDashboard />,
    role: "seller",
    path: "/seller/dashboard/payments",
  },
  {
    id: 15,
    title: "Chat-Customer",
    icon: <MdDashboard />,
    role: "seller",
    path: "/seller/dashboard/chat-customer",
  },
  {
    id: 16,
    title: "Chat-Support",
    icon: <MdDashboard />,
    role: "seller",
    path: "/seller/dashboard/chat-support",
  },
];
