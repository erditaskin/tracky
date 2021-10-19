import React from "react";
import { connect } from "react-redux";
import { logout } from "store/actions/auth";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Navbar = ({ logout, gameReset, authStore }) => {
  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    AppBar: {
      backgroundColor: "#333",
    },
    title: {
      flexGrow: 1,
      padding: "5px 0 0 10px"
    },
    button: {
      textTransform: "none !important",
    },
    link: {
      textTransform: "none !important",
      cursor: "pointer",
      display: "inline-block",
      marginRight: "20px",
      color: "white",
      fontWeight: "400"
    },
  }));
  const logo = "/logo-white.png";
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar className="navbar">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <Typography variant="h6" className={classes.title}>
            Tracky
          </Typography>
          <Link color="inherit" to="/dashboard" className={classes.link}>
            My Tracky Dashboard
          </Link>
          <Button color="inherit" className={classes.button} onClick={logout}>
            <span className="navbar-user-mail">({authStore.user.email})</span>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    authStore: state.authStore,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
