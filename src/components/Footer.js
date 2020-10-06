import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import theme from "./theme";
const { primary, background } = theme;

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(10, 2),
    backgroundColor: "#333",
    color: "#fff",
  },
  iconBox: {
    marginTop: "1rem",
    marginBottom: ".5rem",
    "& > *": {
      fontSize: "2.5rem",
      "&:hover": {
        color: primary,
      },
    },
  },
  footerHeading: {
    "& > *": {
      background: background,
      display: "inline-block",
      WebkitBackgroundClip: "text",
      backgroundClip: "text  ",
      color: "transparent",
    },
  },
  footerSubheading: {},
}));

function Footer() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.footer}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Typography
              align={"center"}
              gutterBottom
              className={classes.footerHeading}
              variant={"h3"}
            >
              <spna>Follow Us</spna>
            </Typography>
            <Typography
              align="center"
              variant="p"
              className={classes.footerSubheading}
            >
              Follow Us To Get News Upcoming events.
            </Typography>
            <Box align="center" component="div" className={classes.iconBox}>
              <FacebookIcon />
              <PinterestIcon />
              <TwitterIcon />
              <InstagramIcon />
            </Box>
            <Typography align="center">
              <small>&copy; Copyright 2020</small>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Footer;
