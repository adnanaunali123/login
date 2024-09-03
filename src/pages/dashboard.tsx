import React, { Fragment } from "react";

import DashBoard from "@/views/DashBoard";
import NavBar from "@/components/ui/navbar";

const dashboard = () => {
  return (
    <Fragment>
      <NavBar />
      <DashBoard />
    </Fragment>
  );
};

export default dashboard;
