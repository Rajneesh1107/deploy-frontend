import React from "react";
import Links from "./Link";
import AllRoutes from "./AllRoutes";

const Navbar = () => {
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
      }}
    >
      <div
        style={{
          // width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Links />
      </div>
      <AllRoutes />
    </div>
  );
};

export default Navbar;
