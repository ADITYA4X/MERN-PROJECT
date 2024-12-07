/* eslint-disable no-unused-vars */

import React from "react";
import { useRoutes } from "react-router-dom";

const Router = ({ allRoutes }) => {
  const routes = useRoutes([...allRoutes]);
  return routes;
};

export default Router;
