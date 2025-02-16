import { MdAddToPhotos, MdDashboard } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { BiSolidCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { IoIosCard, IoMdChatboxes } from "react-icons/io";
import { FaUserTimes } from "react-icons/fa";
import { RiChatUploadFill, RiGitPullRequestLine } from "react-icons/ri";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { LuTally4 } from "react-icons/lu";
import { TbBasketDiscount } from "react-icons/tb";
import { FaCartFlatbed } from "react-icons/fa6";
import { BsPersonVideo } from "react-icons/bs";

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
    icon: <MdAddToPhotos />,
    role: "seller",
    path: "/seller/dashboard/add-painting",
  },
  {
    id: 11,
    title: "All Paintings",
    icon: <LuTally4 />,
    role: "seller",
    path: "/seller/dashboard/paintings",
  },
  {
    id: 12,
    title: "Discount Paintings",
    icon: <TbBasketDiscount />,
    role: "seller",
    path: "/seller/dashboard/discount-paintings",
  },
  {
    id: 13,
    title: "Orders",
    icon: <FaCartFlatbed />,
    role: "seller",
    path: "/seller/dashboard/orders",
  },
  {
    id: 14,
    title: "Payments ",
    icon: <IoIosCard />,
    role: "seller",
    path: "/seller/dashboard/payments",
  },
  {
    id: 15,
    title: "Chat-Customer",
    icon: <IoMdChatboxes />,
    role: "seller",
    path: "/seller/dashboard/chat-customer",
  },
  {
    id: 16,
    title: "Chat-Support",
    icon: <RiChatUploadFill />,
    role: "seller",
    path: "/seller/dashboard/chat-support",
  },
  {
    id: 17,
    title: "Profile",
    icon: <BsPersonVideo />,
    role: "seller",
    path: "/seller/dashboard/profile",
  },
];
