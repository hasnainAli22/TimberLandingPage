import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import theme from "./theme";
const { btnBg } = theme;

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    height: "83vh",
    background: "transparent",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  heroContainer: {
    height: "100%",
  },
  btnMain: {
    background: btnBg,
    color: "#fff",
  },
  btnSec: {
    color: "#fff",
    background: btnBg,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  textClr: {
    color: "#DCDCDC",
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
