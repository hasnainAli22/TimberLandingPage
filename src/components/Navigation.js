import {
  AppBar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import theme from "./theme";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./Navigation.css";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  mrAuto: {
    marginRight: "auto !important",
    display: "block !important",
  },

  navbarLogo: {
    color: "#fff",
    fontWeight: " 300",
    textShadow: "0 8px 10px rgba(0, 0, 0, 0,2)",
    cursor: "pointer",
  },
  navbarTextLink: {
    textDecoration: "none",
    color: "inherit",
  },
  navbarItem: {
    color: " #fff !important",
  },
  navbarIcon: {
    color: "#fff !important",
  },
  navbarMenu: {
    backgroundImage: "rgba(0, 0, 0, 1)",
  },
  navbarMenuItem: {
    fontWeight: "300",
    fontSize: "20px",
  },
}));

function Navigation() {
  // Navbar Transparent to solid color functionality
  const [navbar, setnavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 65) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  // Navbar transparent to solid color functionality

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav id="navigation" className={navbar ? "navbar active" : "navbar"}>
        <Container>
          <AppBar position="sticky" elevation={0} color="transparent">
            <Toolbar>
              <Typography
                variant="h5"
                className={`${classes.mrAuto} ${classes.navbarLogo}`}
              >
                <a href="#navigation" className={classes.navbarTextLink}>
                  Timber
                </a>
              </Typography>
              {isMobile ? (
                <>
                  <IconButton
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className={`${classes.navbarIcon}`}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    className={`${classes.navbarMenu}`}
                  >
                    <MenuItem
                      className={`${classes.navbarMenuItem}`}
                      onClick={handleClose}
                    >
                      Home
                    </MenuItem>
                    <MenuItem
                      className={`${classes.navbarMenuItem}`}
                      onClick={handleClose}
                    >
                      Search
                    </MenuItem>
                    <MenuItem
                      className={`${classes.navbarMenuItem}`}
                      onClick={handleClose}
                    >
                      Features
                    </MenuItem>
                    <MenuItem
                      className={`${classes.navbarMenuItem}`}
                      onClick={handleClose}
                    >
                      Gallery
                    </MenuItem>
                    <MenuItem
                      className={`${classes.navbarMenuItem}`}
                      onClick={handleClose}
                    >
                      Contact
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <Button color="inherit" className={`${classes.navbarItem}`}>
                    Home
                  </Button>
                  <Button color="inherit" className={`${classes.navbarItem}`}>
                    Search
                  </Button>
                  <Button color="inherit" className={`${classes.navbarItem}`}>
                    Features
                  </Button>
                  <Button color="inherit" className={`${classes.navbarItem}`}>
                    Gallery
                  </Button>
                  <Button color="inherit" className={`${classes.navbarItem}`}>
                    Contacts
                  </Button>
                </>
              )}
            </Toolbar>
          </AppBar>
        </Container>
      </nav>
    </>
  );
}

export default Navigation;
