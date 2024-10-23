import * as React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Col,
  Row,
  Input,
} from "reactstrap";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  EmailOutlined,
  PasswordOutlined,
  LoginOutlined,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import { deepOrange, amber, indigo } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import IconButton from "@mui/material/IconButton";
import dayjs from "dayjs";
export function UserRegistration() {
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const UserRegistrationButton = styled(Button)(({ theme }) => ({
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
                      onChange={handleChange}
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
                            variant="standard"
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
                      variant="standard"
                      disabled
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
                  />
                </Box>
              </FormGroup>
               <Box className="text-center">
                <UserRegistrationButton variant="contained" className="mb-2 w-75">
                <LoginOutlined  className="fa-fw me-5" />Login As User</UserRegistrationButton>
              </Box>              
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}
