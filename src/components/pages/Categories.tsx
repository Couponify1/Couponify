import React from "react";
import {
  Box,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CategoryIcon from "@mui/icons-material/Category";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { nanoid } from "@reduxjs/toolkit";

export function Categories() {
  const drawerState = useSelector((state: RootState) => state.drawer);

  const linkObjects = [
    {
      text: "Categories",
      icon: <CategoryIcon />,
    },
    {
      text: "Filter",
      icon: <FilterAltIcon />,
    },
  ];

  const drawerWidth = 240;
  return (
    <section>
      <Drawer
        variant={"persistent"}
        anchor={"left"}
        open={drawerState.open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {linkObjects.map((obj, index) => (
              <ListItem button key={nanoid(5)}>
                <ListItemIcon>{obj.icon}</ListItemIcon>
                <ListItemText primary={obj.text} />
                <ListItemIcon>
                  <ArrowDropDownIcon />
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Container></Container>
    </section>
  );
}
