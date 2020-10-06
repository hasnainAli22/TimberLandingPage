import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalPharmacyIcon from "@material-ui/icons/LocalPharmacy";
import DeckIcon from "@material-ui/icons/Deck";
import HotelIcon from "@material-ui/icons/Hotel";
import React from "react";
import theme from "./theme";
const { secondary } = theme;
const useStyles = makeStyles((theme) => ({
  feature: {
    background: "#f0f0f0",
    padding: theme.spacing(10, 2),
  },
  root: {
    textAlign: "center",
    padding: theme.spacing(2, 2),
    background: "#fff",
    borderRadius: "4px 4px 4px 4px",
  },

  heading: {
    color: secondary,
  },
  icons: { fontSize: 50, color: secondary },
}));

function Feature() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.feature}>
        <Container>
          <Typography gutterBottom align={"center"} variant={"h3"}>
            Explore <span className={classes.heading}>Timber</span>
          </Typography>
          <Grid
            direction="row"
            justify="center"
            alignItems="center"
            container
            spacing={3}
          >
            <Grid item xs={10} sm={6} md={3}>
              <Card className={classes.root} elevation={8}>
                <CardContent>
                  <HotelIcon gutterBottom className={classes.icons} />
                  <Typography gutterBottom variant="h5" component="h2">
                    Beds
                  </Typography>

                  <Typography variant="body2" component="p">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum, velit omnis optio odio voluptas veniam?
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={10} sm={6} md={3}>
              <Card className={classes.root} elevation={8}>
                <CardContent>
                  <FastfoodIcon gutterBottom className={classes.icons} />
                  <Typography gutterBottom variant="h5" component="h2">
                    Food
                  </Typography>

                  <Typography variant="body2" component="p">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum, velit omnis optio odio voluptas veniam?
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={10} sm={6} md={3}>
              <Card className={classes.root} elevation={8}>
                <CardContent>
                  <DeckIcon gutterBottom className={classes.icons} />
                  <Typography gutterBottom variant="h5" component="h2">
                    Park
                  </Typography>

                  <Typography variant="body2" component="p">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum, velit omnis optio odio voluptas veniam?
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={10} sm={6} md={3}>
              <Card className={classes.root} elevation={8}>
                <CardContent>
                  <LocalPharmacyIcon gutterBottom className={classes.icons} />
                  <Typography gutterBottom variant="h5" component="h2">
                    First Aid
                  </Typography>

                  <Typography variant="body2" component="p">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum, velit omnis optio odio voluptas veniam?
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Feature;
