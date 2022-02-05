import React from "react";
import {
  Button,
  Container,
  Typography,
  Paper,
  TextField,
  Link,
} from "@mui/material";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function AddCoupon() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        variant={"outlined"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          width: 396,
          padding: "1rem 0",
          margin: "5rem 0",
          border: "none",
          outline: "none",
        }}
      >
        <Typography variant={"h5"} sx={{ margin: "1rem" }}>
          Add Coupon
        </Typography>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          fullWidth
          autoFocus
          required
        />
        <TextField
          id="outlined-basic"
          label="Expiry Date"
          fullWidth
          variant="outlined"
          autoFocus
          required
        />
        <TextField
          id="outlined-basic"
          label="Category"
          fullWidth
          variant="outlined"
          autoFocus
          required
        />
        <TextField
          id="outlined-basic"
          label="Amount"
          fullWidth
          variant="outlined"
          autoFocus
          required
        />

        <Button
          sx={{ marginY: "2rem" }}
          variant={"contained"}
          size={"large"}
          fullWidth
        >
          Submit
        </Button>
        <Copyright />
      </Paper>
    </Container>
  );
}
