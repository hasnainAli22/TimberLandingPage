import { Box, FormControl, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import theme from "./theme";
const { primary } = theme;
const useStyles = makeStyles((theme) => ({
  cta: {
    background: primary,
    padding: theme.spacing(8, 2),
  },
  ctaInput: {
    border: "none",
    borderRadius: "50px",
    padding: "15px 25px",
    fontSize: "1.2rem",
    color: "#000",
    fontWeight: "400",
    "&:focus": {
      outline: "none",
    },
    zIndex: "10",
    position: "static",
  },
  ctaFormControl: {
    width: "100%",
    border: "none",
    outline: "none",
  },
  ctaIcon: {
    zIndex: "20",
    position: "absolute",
    right: "35px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  },
}));
function Cta1() {
  const classes = useStyles();
  return (
    <>
      <Box className={`${classes.cta}`}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={10}>
            <FormControl className={classes.ctaFormControl}>
              <input
                type="text"
                className={classes.ctaInput}
                placeholder={"Search Your Destination"}
              />
              <SearchIcon color={"inherit"} className={classes.ctaIcon} />
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Cta1;
