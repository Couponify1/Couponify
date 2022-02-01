import { Container, Paper, TextField, Typography, Button } from "@mui/material";
import React from "react";

const widthValue = 7 / 9;
export default function ChangePassword() {
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
          width: 400,
          padding: "1rem 0",
          margin: "5rem 0",
        }}
      >
        <Typography variant={"h5"} sx={{ margin: "1rem" }}>
          Change Password
        </Typography>
        <TextField
          id="outlined-basic"
          label="Email or Phone"
          variant="outlined"
          sx={{ width: widthValue }}
        />

        <Button
          variant="contained"
          sx={{ width: widthValue, marginTop: "1rem" }}
        >
          Change Password
        </Button>
        <Button variant="outlined" sx={{ width: widthValue }}>
          Try other methods
        </Button>
      </Paper>
    </Container>
  );
}
