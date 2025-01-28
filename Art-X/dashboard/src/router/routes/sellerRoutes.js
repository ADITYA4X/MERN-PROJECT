import { lazy } from "react";

const Home = lazy(() => import("../../views/Home"));
const SellerDashboard = lazy(() =>
  import("../../views/seller/SellerDashboard")
);
const AddPainting = lazy(() => import("../../views/seller/AddPainting"));
const EditPainting = lazy(() => import("../../views/seller/EditPainting"));
const AllPaintings = lazy(() => import("../../views/seller/AllPaintings"));
const DiscountPaintings = lazy(() =>
  import("../../views/seller/DiscountPaintings")
);
const Orders = lazy(() => import("../../views/seller/Orders"));
const OrderDetails = lazy(() => import("../../views/seller/OrderDetails"));
const Payments = lazy(() => import("../../views/seller/Payments"));
const SellerToCustomer = lazy(() =>
  import("../../views/seller/SellerToCustomer")
);
const SellerToAdmin = lazy(() => import("../../views/seller/SellerToAdmin"));
const Profile = lazy(() => import("../../views/seller/Profile"));

export const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/add-painting",
    element: <AddPainting />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/edit-painting/:paintingId",
    element: <EditPainting />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/all-paintings",
    element: <AllPaintings />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/discount-paintings",
    element: <DiscountPaintings />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/orders",
    element: <Orders />,
    role: "seller",
    ability: ["active", "deactive"],
  },
  {
    path: "/seller/dashboard/order/details/:orderId",
    element: <OrderDetails />,
    role: "seller",
    ability: ["active", "deactive"],
  },
  {
    path: "/seller/dashboard/payments",
    element: <Payments />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-customer/:customerId",
    element: <SellerToCustomer />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-customer",
    element: <SellerToCustomer />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-support",
    element: <SellerToAdmin />,
    ability: ["active", "deactive", "pending"],
  },
  {
    path: "/seller/dashboard/profile",
    element: <Profile />,
    ability: ["active", "deactive", "pending"],
  },
];
