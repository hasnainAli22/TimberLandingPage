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
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import "./Navigation.css";

function Navigation() {
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
      <nav className="navbar">
        <Container>
          <AppBar position="sticky" elevation={0} color="transparent">
            <Toolbar>
              <Typography variant="h5" className="navbar__logo mr-auto">
                Timber
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
                    className="navbar__icon"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    className="navbar__menu"
                  >
                    <MenuItem
                      className="navbar__menu-item"
                      onClick={handleClose}
                    >
                      Home
                    </MenuItem>
                    <MenuItem
                      className="navbar__menu-item"
                      onClick={handleClose}
                    >
                      Search
                    </MenuItem>
                    <MenuItem
                      className="navbar__menu-item"
                      onClick={handleClose}
                    >
                      Features
                    </MenuItem>
                    <MenuItem
                      className="navbar__menu-item"
                      onClick={handleClose}
                    >
                      Gallery
                    </MenuItem>
                    <MenuItem
                      className="navbar__menu-item"
                      onClick={handleClose}
                    >
                      Contact
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <Button color="inherit" className="navbar__item">
                    Home
                  </Button>
                  <Button color="inherit" className="navbar__item">
                    Search
                  </Button>
                  <Button color="inherit" className="navbar__item">
                    Features
                  </Button>
                  <Button color="inherit" className="navbar__item">
                    Gallery
                  </Button>
                  <Button color="inherit" className="navbar__item">
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
