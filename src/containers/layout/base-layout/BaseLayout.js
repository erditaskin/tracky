import React from "react";
import Navbar from "containers/layout/navbar/Navbar";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <section>{props.children}</section>
    </React.Fragment>
  );
};

export default Layout;
