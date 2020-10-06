import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import theme from "./theme";
const { secondary } = theme;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  packages: {
    background: "#fff",
    padding: theme.spacing(10, 2),
  },
  heading: {
    color: secondary,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    position: "relative",
  },
}));

function Packages() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.packages}>
        <Container>
          <Typography gutterBottom align={"center"} variant={"h3"}>
            Timber <span className={classes.heading}>Adventure</span>
          </Typography>
          <Grid
            direction="row"
            justify="center"
            alignItems="center"
            container
            spacing={3}
          >
            <Grid item xs={12} sm={9} md={4}>
              <Card className={classes.root} elevation={8}>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1526388555389-857041076711?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  title="Asgard"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant={"h5"}
                    className={classes.cardTitle}
                  >
                    Asgard
                  </Typography>

                  <Typography variant="body2" component="p">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum, velit omnis optio odio voluptas veniam?
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={9} md={4}>
              <Card className={classes.root} elevation={8}>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1534009502677-4e5080efa8c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
                  title="Georgo PoolAsgard"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant={"h5"}
                    className={classes.cardTitle}
                  >
                    Georgo Pool
                  </Typography>

                  <Typography variant="body2" component="p">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum, velit omnis optio odio voluptas veniam?
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={9} md={4}>
              <Card className={classes.root} elevation={8}>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1505881502353-a1986add3762?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
                  title="Paella dishAsgard"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant={"h5"}
                    className={classes.cardTitle}
                  >
                    Levinki
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

export default Packages;
