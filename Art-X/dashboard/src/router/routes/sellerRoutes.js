import { lazy } from "react";

const Home = lazy(() => import("../../views/Home"));
const SellerDashboard = lazy(() =>
  import("../../views/seller/SellerDashboard")
);
const AddPainting = lazy(() => import("../../views/seller/AddPainting"));
const AllPaintings = lazy(() => import("../../views/seller/AllPaintings"));
const DiscountPaintings = lazy(() =>
  import("../../views/seller/DiscountPaintings")
);
const Orders = lazy(() => import("../../views/seller/Orders"));
const Payments = lazy(() => import("../../views/seller/Payments"));

export const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/add-painting",
    element: <AddPainting />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/all-paintings",
    element: <AllPaintings />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/discount-paintings",
    element: <DiscountPaintings />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/orders",
    element: <Orders />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/payments",
    element: <Payments />,
    ability: ["seller"],
  },
];
