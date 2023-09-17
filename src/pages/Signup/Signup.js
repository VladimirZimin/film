import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import bgSignup from "../../assets/img/bg-singup.jpg";
import { Copyright } from "components/Copyright/Copyright";
import { Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "redux/selectors";
import { addUser } from "redux/auth/authSlice";
import {
  useCreateSessionMutation,
  useCreateTokenQuery,
  useValidateUserMutation,
} from "redux/auth/operations";

const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const requestToken = useSelector(selectToken);

  const { refetch } = useCreateTokenQuery();
  const [validateUser] = useValidateUserMutation();
  const [createSession, { isLoading }] = useCreateSessionMutation();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const data = new FormData(evt.currentTarget);
    const user = {
      username: data.get("username"),
      password: data.get("password"),
      request_token: requestToken,
    };

    validateUser(user);
    dispatch(addUser(user));

    evt.currentTarget.reset();
  };

  useEffect(() => {
    if (user.username && user.password && user.request_token) {
      createSession(user);
    }
  }, [createSession, user]);

  useEffect(() => {
    if (!user.username) {
      refetch();
    }
  }, [refetch, user.username]);

  return (
    <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            mobile: 0,
            mobile2: 560,
            tablet: 850,
            laptop: 1024,
            desktop: 1170,
            large: 1450,
          },
        },
      })}
    >
      <Grid
        container
        component="section"
        // sx={{ height: "calc(100vh - 60.69px)" }}
        sx={{ height: "100vh" }}
      >
        <Grid
          item
          mobile={false}
          mobile2={5}
          tablet={7}
          laptop={8}
          desktop={8}
          large={9}
          sx={{
            backgroundImage: `url(${bgSignup})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "#1f1d2b",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          mobile={12}
          mobile2={7}
          tablet={5}
          laptop={4}
          desktop={4}
          large={3}
          sx={{ backgroundColor: "#1f1d2b", color: "#808191" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#ea5f5f", width: 56, height: 56 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                variant="standard"
                sx={{
                  color: "#808191",
                  ".MuiInputLabel-root": { color: "#808191" },
                  ".MuiInputLabel-root.Mui-focused": { color: "#ea5f5f" },
                  ".MuiFormLabel-asterisk": { color: "#ea5f5f" },
                  ".MuiInput-root": {
                    color: "#808191",
                    "&:after": { borderBottom: "2px solid #ea5f5f" },
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="standard"
                sx={{
                  color: "#808191",
                  ".MuiInputLabel-root": { color: "#808191" },
                  ".MuiInputLabel-root.Mui-focused": { color: "#ea5f5f" },
                  ".MuiFormLabel-asterisk": { color: "#ea5f5f" },
                  ".MuiInput-root": {
                    color: "#808191",
                    "&:after": { borderBottom: "2px solid #ea5f5f" },
                  },
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    sx={{
                      color: "#808191",
                      "&.Mui-checked": {
                        color: "#ea5f5f",
                      },
                    }}
                  />
                }
                label="Remember me"
              />

              <Button
                type="submit"
                disabled={isLoading ? true : false}
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#ea5f5f",
                  "&:hover": { backgroundColor: "#ffffff", color: "#ea5f5f" },
                }}
              >
                LogIn
              </Button>

              <Grid container>
                <Grid item>
                  <Link
                    color="inherit"
                    href={`https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${window.location.origin}/film/signup`}
                    variant="body2"
                    sx={{ "&:hover": { color: "#ea5f5f" } }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>

              <Copyright sx={{ mt: 5, color: "#808191" }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Signup;
