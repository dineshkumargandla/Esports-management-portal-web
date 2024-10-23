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

export function OrgRegistration() {
  const OrgRegistrationButton = styled(Button)(({ theme }) => ({
    disableElevation:true,
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    '&:hover': {
      backgroundColor: deepOrange[700],
    },
    size:"small"
  }));
  return (
    <>
    <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
              <div
              className="alert alert-dark registration-head text-center"
              role="alert"
            >
              Register as Organization
            </div>
          </CardHeader>
          <CardBody className="px-lg-5">
            <Form role="form">
              <FormGroup className="mb-3">
                <Box sx={{ display: "flex", alignItems: "flex-end" }} className="mb-4">
                  <TextField
                    id="org-name-field"
                    name="org-name"
                    type="text"
                    fullWidth
                    label="Organization Name"
                    variant="standard"
                  />
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-end" }} className="mb-4">
                  <TextField
                    id="org-Owner-field"
                    name="org-Owner"
                    type="text"
                    fullWidth
                    label="Organization Owner"
                    variant="standard"
                  />
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-end" }} className="mb-4">
                  <TextField
                    id="org-reg-num-field"
                    name="org-reg-num"
                    type="text"
                    fullWidth
                    label="Organization Registration Number"
                    variant="standard"
                  />
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-end" }} className="mb-4">
                  <TextField
                    id="org-owner-passport-number-field"
                    name="org-owner-passport-number"
                    type="text"
                    fullWidth
                    label="Organization Owner Passport Number"
                    variant="standard"
                  />
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-end" }} className="mb-4">
                  <TextField
                    id="org-location-field"
                    name="org-location"
                    type="text"
                    fullWidth
                    label="Organization Location"
                    variant="standard"
                  />
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-end" }} className="mb-4">
                  <TextField
                    id="org-contact-number"
                    name="org-contact"
                    type="number"
                    fullWidth
                    label="Organization Contact Number"
                    variant="standard"
                  />
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-end" }} className="mb-4">
                  <TextField
                    id="org-contact-number"
                    name="org-contact"
                    type="number"
                    fullWidth
                    label="Organization Contact Number"
                    variant="standard"
                  />
                </Box>


                <Box sx={{ display: "flex", alignItems: "flex-end" }} className="mb-4">
                  <TextField
                    id="org-email-field"
                    name="org-email"
                    type="text"
                    fullWidth
                    label="Organization Email"
                    variant="standard"
                  />
                </Box>

                
                <Box sx={{ display: "flex", alignItems: "flex-end" }} className="mb-4">
                  <TextField
                    id="org-password-field"
                    name="org-password"
                    type="text"
                    fullWidth
                    label="Organization Password"
                    variant="standard"
                  />
                </Box>

                
                
                <Box sx={{ display: "flex", alignItems: "flex-end" }} className="mb-4">
                  <TextField
                    id="org-confirm-password-field"
                    name="org-confirm-password"
                    type="text"
                    fullWidth
                    label="Organization confirm Password"
                    variant="standard"
                  />
                </Box>
              </FormGroup>
              <Box className="text-center">
                <OrgRegistrationButton variant="contained" className="mb-2 w-75">
                <LoginOutlined  className="fa-fw me-5" />Register As Organization</OrgRegistrationButton>
              </Box>             
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}
