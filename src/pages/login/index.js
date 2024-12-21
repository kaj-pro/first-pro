// ** MUI Imports
import {
  Card,
  CardContent,
  Box,
  CardHeader,
  TextField,
  Button,
} from "@mui/material";

// ** Third Party Imports
import { useFormik } from "formik";
import * as yup from "yup";

const LoginPage = ({ initialData }) => {
  const validation = useFormik({
    initialValues: {
      userName: "",
      passWord: "",
      //   ...initialData, // example for component used for add and edit NOT a Login Form
    },
    validationSchema: yup.object({
      userName: yup.string().required("User name is required"),
      passWord: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#89cff0",
      }}
    >
      <Card sx={{ width: 400 }}>
        <CardHeader title="Login Page" />
        <CardContent>
          <Box>
            <TextField
              size="small"
              label="User Name"
              name="userName"
              fullWidth
              onChange={validation.handleChange}
              value={validation.values.userName}
              error={Boolean(
                validation.touched.userName && validation.errors.userName
              )}
              helperText={
                validation.touched.userName && validation.errors.userName
              }
            />
            <TextField
              size="small"
              label="Password"
              name="passWord"
              type="password"
              sx={{ mt: 1 }}
              fullWidth
              onChange={validation.handleChange}
              value={validation.values.passWord}
              error={Boolean(
                validation.touched.passWord && validation.errors.passWord
              )}
              helperText={
                validation.touched.passWord && validation.errors.passWord
              }
            />
            <Button
              onClick={validation.handleSubmit}
              sx={{ mt: 2 }}
              fullWidth
              variant="contained"
            >
              Sign In
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
