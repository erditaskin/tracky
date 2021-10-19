import React from "react";
import { Box } from "@material-ui/core";

const Layout = (props) => {
  const logo = "/logo.png";
  return (
    <React.Fragment>
      <Box className="auth-box">
        <Box className="logo">
          <img src={logo} alt="Logo" /><br />
          <h1>Tracky</h1>
          <h3>Simply Track Your Weight Progress</h3>
        </Box>
        <section>{props.children}</section>
      </Box>
    </React.Fragment>
  );
};

export default Layout;
