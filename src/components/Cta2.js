import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import React from "react";
const useStyles = makeStyles((theme) => ({
  cta: {
    background: "#7e3896",
    padding: theme.spacing(10, 2),
  },
  button: {
    color: "#7e3896",
    padding: theme.spacing(1, 3),
    borderRadius: "10px",
    fontSize: "1.2rem",
  },
}));

function Cta2() {
  const classes = useStyles();

  return (
    <>
      <Box className={`${classes.cta}`}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Button
            color="default"
            variant="contained"
            className={classes.button}
            endIcon={<SendIcon />}
          >
            Book Now
          </Button>
        </Grid>
      </Box>
    </>
  );
}

export default Cta2;
