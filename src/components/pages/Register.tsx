import React from "react";
import {
  Button,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

export function Register() {
  const widthValue = 7 / 9;
  const navigate = useNavigate();
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
        <Typography variant={"h4"} sx={{ margin: "1rem" }}>
          Register
        </Typography>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          sx={{ width: widthValue }}
        />
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          sx={{ width: widthValue }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{ width: widthValue }}
        />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          sx={{ width: widthValue }}
        />
        <Button
          sx={{ width: widthValue }}
          variant={"contained"}
          size={"large"}
          startIcon={<LoginIcon />}
        >
          Register
        </Button>
        <Container disableGutters>
          <Divider sx={{ margin: "0.5rem 0" }}>or</Divider>
        </Container>

        <Button
          variant={"outlined"}
          sx={{ width: widthValue, background: "#fff" }}
          startIcon={<GoogleIcon />}
        >
          Continue with Google
        </Button>
        <Button
          variant={"contained"}
          sx={{ width: widthValue }}
          startIcon={<FacebookIcon />}
        >
          Continue with facebook
        </Button>
        <Button sx={{ width: widthValue }} startIcon={<PhoneIcon />}>
          Continue with phone
        </Button>
        <Container disableGutters>
          <Divider sx={{ margin: "0.5rem 0" }} />
        </Container>
        <Typography>Already have an account?</Typography>
        <Button
          variant={"contained"}
          onClick={() => {
            navigate("/login");
          }}
        >
          Sign In
        </Button>
      </Paper>
    </Container>
  );
}
