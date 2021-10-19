import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(5),
  },
  letterSpacing: {
    letterSpacing: "-1px",
  },
  button: {
    textTransform: "none !important",
    margin: "15px auto",
  },
}));

const Landing = () => {
  const logo = "/logo.png";
  const getInShapeImg = "/get-in-shape.png";
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={2} className="transparent-box p30 mb30sm">
          <Grid item xs>
            <Typography
              variant="h4"
              gutterBottom
              className={classes.letterSpacing}
            >
              Tracky - Brand new weight tracker app!
            </Typography>
            <Typography variant="h6" gutterBottom>
              It's easy to track down your weight history via Tracky!
            </Typography>
            <hr className="styled" />
            <Typography
              variant="h5"
              gutterBottom
              className={classes.letterSpacing}
            >
              With Tracky;
            </Typography>
            <ul>
              <li>Create a Tracky account within 10 secs</li>
              <li>Simply add/edit/delete your weight measurements.</li>
              <li>Check your whole history with Tracky's simple UI.</li>
            </ul>
          </Grid>
          <Hidden smDown>
            <Grid item xs={3}>
              <img src={logo} alt="Home" className="home-banner-img" />
            </Grid>
          </Hidden>
        </Grid>
        <Grid container spacing={2} className="transparent-box secondary p30 mb30sm">
        < Hidden smDown>
            <Grid item xs={3}>
              <img src={getInShapeImg} alt="Get In Shape" className="home-banner-img" />
            </Grid>
          </Hidden>
          <Grid item xs>
            <Typography
              variant="h4"
              gutterBottom
              className={classes.letterSpacing}
            >
              Get In Shape!
            </Typography>
            <Typography variant="h6" gutterBottom>
              Tracky offers you to get in shape with Tracky only for limited time period!<br />
              Don't miss that chance to get your place in Tracky!
            </Typography>
            <hr className="styled" />
            <ul>
              <li>Tracky is free!</li>
              <li>Tracky is simple!</li>
              <li>Tracky is there for to help you get in shape!.</li>
            </ul>
          </Grid>
          
        </Grid>
      </Container>
    </div>
  );
};

export default Landing;
