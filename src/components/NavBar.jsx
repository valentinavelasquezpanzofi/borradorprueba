import React, { useState, useEffect } from "react";
import kuromi from "../a/kuromi.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { HomeIcon } from "@mui/icons-material/Home";
import { InfoIcon } from "@mui/icons-material/Info";
import { PhoneRoundedIcon } from "@mui/icons-material/PhoneRounded";
import ReactGA from "react-ga";

useEffect(() => {
  ReactGA.pageview(window.location.pathname);
});

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      Text: "Inicio",
      icon: <HomeIcon />,
    },
    {
      Text: "Información",
      icon: <InfoIcon />,
    },
    {
      Text: "Contacto",
      icon: <PhoneRoundedIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={kuromi} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Inicio</a>
        <a href="">Información</a>
        <a href="">Contacto</a>
        <button className="primary-button">Click me</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} dissablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default NavBar;
