import { PageHeader } from "antd";
import React from "react";
import Login from "../components/login";

const MobileView = () => {
  return (
    <div>
      <PageHeader className="header" title="ATools" />
      <div className="body">
        <Login />
      </div>
    </div>
  );
};

export default MobileView;
