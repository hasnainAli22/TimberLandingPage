import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    height: "74.7vh",
    background:
      "linear-gradient(to right, rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)) ,   url(https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  heroContainer: {
    height: "100%",
  },
  btnMain: {
    backgroundImage: "linear-gradient(to right, #1695ce, #7e3896)",
    color: "#fff",
  },
  btnSec: {
    color: "#fff",
    backgroundImage: "linear-gradient(to right,#7e3896 ,#1695ce )",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  textClr: {
    color: "#fff",
    fontWeight: "lighter !important",
  },
}));

function Hero() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.heroContent}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.heroContainer}
        >
          <Grid item>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                className={classes.textClr}
                gutterBottom
              >
                Grand Experience.
              </Typography>
              <Typography
                variant="h5"
                align="center"
                className={classes.textClr}
                paragraph
              >
                Let's have a grand Experience Lorem ipsum dolor sit, amet
                consectetur adipisicing Lorem ipsum dolor sit amet Lorem, ipsum
                dolor.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" className={classes.btnMain}>
                      Get Started
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color={"primary"}
                      className={classes.btnSec}
                    >
                      Contact Us
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Hero;
