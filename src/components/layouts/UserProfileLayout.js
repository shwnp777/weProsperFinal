import React from "react";
import { Outlet } from "react-router";

const UserProfileLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default UserProfileLayout;
