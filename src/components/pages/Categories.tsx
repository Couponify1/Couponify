import React from "react";
import { styled, useTheme } from "@mui/system";
import {
  Box,
  Drawer,
  Grid,
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
import Coupon from "../utility/Coupon";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  // @ts-ignore
  transition: theme.transitions.create("margin", {
    // @ts-ignore
    easing: theme.transitions.easing.sharp,
    // @ts-ignore
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    // @ts-ignore
    transition: theme.transitions.create("margin", {
      // @ts-ignore
      easing: theme.transitions.easing.easeOut,
      // @ts-ignore
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export function Categories() {
  const drawerState = useSelector((state: RootState) => state.drawer);
  const theme = useTheme();

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

  return (
    <section>
      <Box sx={{ display: "flex" }}>
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
        <Main open={drawerState.open}>
          <Typography
            variant="h4"
            color="primary"
            marginTop={"4rem"}
            marginBottom="2rem"
          >
            Browse Coupons
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={2} md={3} sm={6}>
              <Coupon />
            </Grid>
            <Grid item xs={12} xl={2} md={3} sm={6}>
              <Coupon />
            </Grid>
            <Grid item xs={12} xl={2} md={3} sm={6}>
              <Coupon />
            </Grid>
            <Grid item xs={12} xl={2} md={3} sm={6}>
              <Coupon />
            </Grid>
          </Grid>
        </Main>
      </Box>
    </section>
  );
}
