import React from "react";
import { useHistory } from "react-router-dom";
import { HOME } from "core/constants/routes";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(5),
  },
  container: {
    textAlign: "center",
    paddingTop: "30px",
  },
  button: {
    textTransform: "none !important",
    margin: "45px auto",
  },
}));

const NotFound = () => {
  const logoImg = "/logo.png";
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <img
          src={logoImg}
          alt="logo"
          style={{ width: "100px", marginBottom: "50px" }}
        />
        <Typography variant="h4">Lost in tracky?</Typography>
        <Typography variant="h6">Eventhough you're lost in tracky, your progress is safely trackkied!</Typography>
        <Button
          color="inherit"
          variant="outlined"
          className={classes.button}
          onClick={() => history.push(HOME)}
        >
          Return to Home
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;
