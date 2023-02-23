import React from "react";
import { Outlet } from "react-router";

const BusinessLayout = () => {
  return (
    <div>
      <h1>BusinessLayout</h1>
      <Outlet />
    </div>
  );
};

export default BusinessLayout;
