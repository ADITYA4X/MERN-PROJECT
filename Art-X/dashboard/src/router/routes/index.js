import MainLayout from "../../layout/MainLayout";
import { privateRoutes } from "./privateRoutes";
import ProtectRoute from "./ProtectRoute";

export const getRoutes = () => {
  privateRoutes.map((r) => {
    // console.log(r);
    r.element = <ProtectRoute route={r}>{r.element}</ProtectRoute>;
  });

  return {
    path: "/",
    element: <MainLayout />,
    children: privateRoutes,
  };
};
