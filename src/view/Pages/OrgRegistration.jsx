import * as React from "react";
import { Card, CardHeader, CardBody, FormGroup, Form, Col } from "reactstrap";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  LoginOutlined,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import { deepOrange} from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { ModelPopUp } from "../../Common/ModelPopupErrorValidation.jsx";
import { OrganizationRegistrationFormValidations } from "../Validations/OrganizationRegistrationFormValidations.jsx";
export function OrgRegistration() {
  const [organizationName, setOrganizationName] = React.useState("");
  const [organizationOwner, setOrganizationOwner] = React.useState("");
  const [organizationEmail, setOrganizationEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [contactNumber, setContactNumber] = React.useState("");
  const [organizationRegNumber, setOrganizationRegNumber] = React.useState("");
  const [ownerPassportNumber, setOwnerPassportNumber] = React.useState("");
  const [organizationLocation, setOrganizationLocation] = React.useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [errorMessages, setErrorMessages] = React.useState(new Array());
  const [showSucesssModal, setshowSucesssModal] = React.useState(false);
  const [orgId, setOrgId] = React.useState("");

  var errors = new Array();

  const handleOrganizationName = (event) => {
    setOrganizationName(event.target.value);
  };

  const handleOrganizationOwner = (event) => {
    setOrganizationOwner(event.target.value);
  };

  const handleOrganizationEmail = (event) => {
    setOrganizationEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleContactNumber = (event) => {
    setContactNumber(event.target.value);
  };

  const handleOrganizationRegNumber = (event) => {
    setOrganizationRegNumber(event.target.value);
  };

  const handleOwnerPassportNumber = (event) => {
    setOwnerPassportNumber(event.target.value);
  };

  const handleOrganizationLocation = (event) => {
    setOrganizationLocation(event.target.value);
  };

  const handleOrganizationRegistration = (event) => {
    event.preventDefault();
    const registrationFormData = {
      organizationName,
      organizationOwner,
      organizationEmail,
      password,
      contactNumber,
      organizationRegNumber,
      ownerPassportNumber,
      organizationLocation,
      confirmPassword
    };
    errors = OrganizationRegistrationFormValidations(registrationFormData);
    setErrorMessages(errors);
    if (errors.length > 0) {
      setModalShow(true);    
    } else {
     console.log(registrationFormData); 
    }
  };

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
                    value={organizationName}
                    onChange={handleOrganizationName}
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
                    value={organizationOwner}
                    onChange={handleOrganizationOwner}
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
                    value={organizationRegNumber}
                    onChange={handleOrganizationRegNumber}
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
                    value={ownerPassportNumber}
                    onChange={handleOwnerPassportNumber}
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
                    value={organizationLocation}
                    onChange={handleOrganizationLocation}
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
                    value={contactNumber}
                    onChange={handleContactNumber}
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
                    value={organizationEmail}
                onChange={handleOrganizationEmail}
                  />
                </Box>

                
                <Box sx={{ display: "flex", alignItems: "flex-end" }} className="mb-4">
                  <TextField
                    id="org-password-field"
                    name="org-password"
                    type="password"
                    fullWidth
                    label="Organization Password"
                    variant="standard"
                    value={password}
                onChange={handlePassword}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }} className="mb-4">
                  <TextField
                    id="org-confirm-password-field"
                    name="org-confirm-password"
                    type="password"
                    fullWidth
                    label="Organization confirm Password"
                    variant="standard"
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                  />
                </Box>
              </FormGroup>
              <Box className="text-center">
                <OrgRegistrationButton variant="contained" className="mb-2 w-75"
                onClick={handleOrganizationRegistration}>
                <LoginOutlined  className="fa-fw me-5" />Register As Organization</OrgRegistrationButton>
              </Box>             
              <ModelPopUp
                show={modalShow}
                errormessage={errorMessages}
                onHide={() => setModalShow(false)}
              />
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}
