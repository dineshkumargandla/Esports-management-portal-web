import * as React from "react";
import { Card, CardHeader, CardBody, FormGroup, Form, Col } from "reactstrap";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  EmailOutlined,
  PasswordOutlined,
  LoginOutlined,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import { deepOrange,amber,indigo } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Divider from "@mui/material/Divider";


const UserLoginButton = styled(Button)(({ theme }) => ({
  disableElevation:true,
  color: theme.palette.getContrastText(deepOrange[500]),
  backgroundColor: deepOrange[500],
  '&:hover': {
    backgroundColor: deepOrange[700],
  },
  size:"small"
}));

const OrgLoginButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(amber[500]),
  backgroundColor: amber[500],
  '&:hover': {
    backgroundColor: amber[700],
  },
}));

const TOLoginButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(indigo[500]),
  backgroundColor: indigo[500],
  '&:hover': {
    backgroundColor: indigo[700],
  },
}));




export const Login = () => {
  function handleLoginForm(event) {
    console.log("Login Form");
  }
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center">
              <h2>Sign in as user</h2>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5">
            <Form role="form">
              <FormGroup className="mb-3">
                <Box sx={{ display: "flex", alignItems: "flex-end" }} className="mb-4">
                  <EmailOutlined
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="email-field"
                    name="email"
                    type="email"
                    fullWidth
                    label="Email"
                    variant="standard"
                  />
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-end" }} className="mb-4">
                  <PasswordOutlined
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="password-field"
                    name="Password"
                    type="Password"
                    fullWidth
                    label="Password"
                    variant="standard"
                    
                  />
                </Box>
                <div className="text-right">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <small>Reset password?</small>
                </a>
              </div>
              </FormGroup>
              <Box className="text-center">
                <UserLoginButton variant="contained" className="mb-2 w-75">
                <LoginOutlined  className="fa-fw me-5" />Login As User</UserLoginButton>
              </Box>
              <Divider className="mb-4"/>
              <Box className="text-center">
                <OrgLoginButton variant="contained" className="mb-2 w-75">
                <LoginOutlined  className="fa-fw me-5" />Login As Organization</OrgLoginButton>
              </Box>
              <Divider className="mb-4"/>
              <Box className="text-center">
                <TOLoginButton variant="contained" className=" mb-2 w-75">
                <LoginOutlined  className="fa-fw me-5" />Login As TO</TOLoginButton>
              </Box>
             
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};