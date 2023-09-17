import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const UserDetails = () => {
  return (
    <>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default UserDetails;
