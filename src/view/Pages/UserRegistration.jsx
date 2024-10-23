import * as React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Col,
  Row,
} from "reactstrap";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  LoginOutlined,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import { deepOrange, amber, indigo } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import dayjs, { Dayjs } from "dayjs";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {UserRegistrationFormValidations} from "../Validations/UserRegistrationFormValidations.jsx"
import { ModelPopUp } from "../../Common/ModelPopupErrorValidation.jsx";
export function UserRegistration() {
  const [gender, setGender] = React.useState("");
  const [fullName, setName] = React.useState("");
  const [dateOfBirth, setDate] = React.useState(dayjs());
  const [age, setUserAge] = React.useState();
  const [aadharNumber, setAadharNumber] = React.useState();
  const [passportNumber, setPassportNumber] = React.useState("");
  const [contactNumber, setContactNumber] = React.useState();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showSucesssModal, setshowSucesssModal] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [errorMessages, setErrorMessages] = React.useState(new Array());
  var errors = new Array();
  const handleFullNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleDate = (e) => {
    var date = new Date(e.$d);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    setDate(day + "/" + month + "/" + year);
    setUserAge(calculateAge(year));
  };

  function calculateAge(year) {
    const currentYear = dayjs().year();
    let userAge = currentYear - year;
    return userAge;
  }

  const handleAadharNumber = (e) => {
    setAadharNumber(e.target.value);
  };

  const handlePassportNumber = (e) => {
    setPassportNumber(e.target.value);
  };

  const handleContactNumber = (e) => {
    setContactNumber(parseInt(e.target.value));
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleUserRegistration = (e) => {
    e.preventDefault();
    const userRegistrationFormData = {
      age,
      gender,
      dateOfBirth,
      fullName,
      email,
      password,
      contactNumber,
      aadharNumber,
      passportNumber,
      confirmPassword
    };
    errors = UserRegistrationFormValidations(userRegistrationFormData);
    setErrorMessages(errors);
    if(errors.length > 0){
      setModalShow(true);
      console.log(errors);
    }else{
      console.log(userRegistrationFormData);
    }
  };

  const UserRegistrationButton = styled(Button)(({ theme }) => ({
    disableElevation: true,
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    "&:hover": {
      backgroundColor: deepOrange[700],
    },
    size: "small",
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
              Register as User
            </div>
          </CardHeader>
          <CardBody className="px-lg-5">
            <Form role="form">
              <FormGroup className="mb-3">
                <Box
                  sx={{ display: "flex", alignItems: "flex-end" }}
                  className="mb-4"
                >
                  <TextField
                    id="full-name-field"
                    name="full-name"
                    type="text"
                    fullWidth
                    label="Full Name"
                    variant="standard"
                    onChange={handleFullNameChange}
                    value={fullName}
                  />
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "flex-end" }}
                  className="mb-4"
                >
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 350 }}>
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                      labelId="gender-standard-label"
                      id="gender-select-standard"
                      value={gender}
                      onChange={handleGenderChange}
                      label="Gender"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                      <MenuItem value={"Prefer not to say"}>
                        Prefer Not to Say
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Row className="align-items-center justify-content-xl-between mb-4">
                  <Col xl="8">
                    <Form>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            label="Date of Birth"
                            format="DD/MM/YYYY"
                            onChange={handleDate}

                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Form>
                  </Col>
                  <Col xl="4">
                    <TextField
                      id="age-field"
                      name="age"
                      type="text"
                      fullWidth
                      label="Age"
                      disabled
                      variant="standard"
                      slotProps={{
                        inputLabel: {
                          shrink: true,
                        },
                      }}
                      value={dateOfBirth ? age : ""}                      
                    />
                  </Col>
                </Row>
                <Box
                  sx={{ display: "flex", alignItems: "flex-end" }}
                  className="mb-4"
                >
                  <TextField
                    id="aadhar-number-field"
                    name="aadhar-number"
                    type="number"
                    fullWidth
                    label="Aadhar Number"
                    variant="standard"
                    onChange={handleAadharNumber}
                    value={aadharNumber}
                    
                  />
                </Box>

                <Box
                  sx={{ display: "flex", alignItems: "flex-end" }}
                  className="mb-4"
                >
                  <TextField
                    id="passport-field"
                    name="passport"
                    type="text"
                    fullWidth
                    label="Passport Number"
                    variant="standard"
                    value={passportNumber}
                    onChange={handlePassportNumber}
                  />
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "flex-end" }}
                  className="mb-4"
                >
                  <TextField
                    id="contact-number"
                    name="contact-number"
                    type="number"
                    fullWidth
                    label="Contact Number"
                    variant="standard"
                    value={contactNumber}
                    onChange={handleContactNumber}
                  />
                </Box>

                <Box
                  sx={{ display: "flex", alignItems: "flex-end" }}
                  className="mb-4"
                >
                  <TextField
                    id="email-field"
                    name="email-id"
                    type="text"
                    fullWidth
                    label="Email"
                    variant="standard"
                    value={email}
                    onChange={handleEmail}
                  />
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "flex-end" }}
                  className="mb-4"
                >
                  <TextField
                    id="password-field"
                    name="password-id"
                    type="text"
                    fullWidth
                    label="Password"
                    variant="standard"
                    value={password}
                    onChange={handlePassword}
                  />
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "flex-end" }}
                  className="mb-4"
                >
                  <TextField
                    id="confirm-password-field"
                    name="confirm-password-id"
                    type="text"
                    fullWidth
                    label="Confirm Password"
                    variant="standard"
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                  />
                </Box>
              </FormGroup>
              <Box className="text-center">
                <UserRegistrationButton
                  variant="contained"
                  className="mb-2 w-75"
                  onClick={handleUserRegistration}
                >
                  <LoginOutlined className="fa-fw me-5" />
                  Login As User
                </UserRegistrationButton>
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
