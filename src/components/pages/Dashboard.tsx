import React from "react";
import {
  Box,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Grid,
  Paper,
  styled,
  useTheme,
  Button,
  ButtonGroup,
  TableCell,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CategoryIcon from "@mui/icons-material/Category";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import { nanoid } from "@reduxjs/toolkit";
import Coupon from "../utility/Coupon";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EuroIcon from "@mui/icons-material/Euro";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

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

export const Dashboard = () => {
  const drawerState = useSelector((state: RootState) => state.drawer);
  const theme = useTheme();

  function createData(from: string, to: any, amount: any, date: any) {
    return { from, to, amount, date };
  }

  let width = window.innerWidth;

  const rows = [
    createData("James", "Me", 6.0, 24),
    createData("Me", "Sam", 9.0, 37),
    createData("Kirk", "Me", 16.0, 24),
    createData("Kiko", "Me", 3.7, 67),
    createData("Keith", "Me", 16.0, 49),
  ];

  const linkObjects = [
    {
      text: "Wallet",
      icon: <AccountBalanceWalletIcon />,
    },
    {
      text: "Coupons",
      icon: <LocalOfferIcon />,
    },
    {
      text: "Payments",
      icon: <EuroIcon />,
    },
    {
      text: "Account",
      icon: <ManageAccountsIcon />,
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
            <Typography
              variant="h5"
              sx={{ margin: "1rem", marginTop: "3rem" }}
              color="primary"
            >
              Dashboard
            </Typography>
            <List sx={{ paddingLeft: "0.5rem" }}>
              {linkObjects.map((obj, index) => (
                <ListItem button key={nanoid(5)}>
                  <ListItemIcon>{obj.icon}</ListItemIcon>
                  <ListItemText primary={obj.text} />
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
            sx={{ display: "inline-block" }}
          >
            My Balance
          </Typography>
          <Paper
            variant="outlined"
            sx={{
              display: "inline-block",
              margin: "1rem",
              paddingInline: "1rem",
            }}
          >
            <Typography variant="h4">$100</Typography>
          </Paper>
          <br />
          <ButtonGroup>
            <Button variant="outlined" color="primary">
              Add Money
            </Button>
            <Button variant="outlined" color="primary">
              Withdraw
            </Button>
          </ButtonGroup>
          <br />
          <Typography
            variant="h4"
            color="primary"
            marginY="2rem"
            sx={{ display: "inline-block" }}
          >
            My Coupons
          </Typography>{" "}
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
          <Typography
            variant="h4"
            color="primary"
            marginY="2rem"
            sx={{ display: "inline-block" }}
          >
            My Payments
          </Typography>{" "}
          <TableContainer variant="outlined" component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>S.no</TableCell>
                  <TableCell>From</TableCell>
                  <TableCell>To</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.from}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {rows.indexOf(row) + 1}
                    </TableCell>
                    <TableCell>{row.from}</TableCell>
                    <TableCell>{row.to}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Main>
      </Box>
    </section>
  );
};
