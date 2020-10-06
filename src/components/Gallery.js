import {
  Container,
  Box,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import theme from "./theme";
const { secondary } = theme;
const useStyles = makeStyles((theme) => ({
  gallery: {
    background: "#fff",
    padding: theme.spacing(10, 2),
  },
  heading: {
    color: secondary,
  },
  imgBox: {
    width: "100%",
  },
  img: {
    width: "100%",
  },
}));
function Gallery() {
  const classes = useStyles();
  const images = [
    {
      url:
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
      alt: "pic1",
    },
    {
      url:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",

      alt: "pic2",
    },
    {
      url:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "pic3",
    },
    {
      url:
        "https://images.unsplash.com/photo-1563314830-9f79ee280594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
      alt: "pic4",
    },
    {
      url:
        "https://images.unsplash.com/photo-1563380237549-55f9d2ab2c4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
      alt: "pic5",
    },
    {
      url:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "pic6",
    },
    {
      url:
        "https://images.unsplash.com/photo-1534612899740-55c821a90129?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "pic7",
    },
    {
      url:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      alt: "pic8",
    },
    {
      url:
        "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "pic9",
    },
  ];

  return (
    <>
      <Box className={classes.gallery}>
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
            {images.map((item) => (
              <Grid item xs={12} sm={6} md={4}>
                <Box className={classes.imgBox}>
                  <img className={classes.img} src={item.url} alt={item.alt} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Gallery;
