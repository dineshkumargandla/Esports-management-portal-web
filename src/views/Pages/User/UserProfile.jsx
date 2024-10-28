import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

import {
  X,
  FacebookRounded,
  Instagram,
  YouTube
} from "@mui/icons-material";


export function UserProfile(props) {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">My Profile</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Full Name</label>
                        <Input
                          disabled
                          placeholder="fullName"
                          value={
                            JSON.parse(localStorage.getItem("userProfileData"))
                              .fullName
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Gender</label>
                        <Input
                          value={
                            JSON.parse(localStorage.getItem("userProfileData"))
                              .gender
                          }
                          placeholder="Gender"
                          type="text"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">Age</label>
                        <Input
                          value={
                            JSON.parse(localStorage.getItem("userProfileData"))
                              .age
                          }
                          type="email"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Date of Birth</label>
                        <Input
                          value={
                            JSON.parse(localStorage.getItem("userProfileData"))
                              .dateOfBirth
                          }
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Email address</label>
                        <Input
                          value={
                            JSON.parse(localStorage.getItem("userProfileData"))
                              .email
                          }
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Contact Number</label>
                        <Input
                          value={
                            JSON.parse(localStorage.getItem("userProfileData"))
                              .contactNumber
                          }
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                        <label>Aadhar Number</label>
                        <Input
                          value={
                            JSON.parse(localStorage.getItem("userProfileData"))
                              .aadharNumber
                          }
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label>Pasport Number</label>
                        <Input
                          value={
                            JSON.parse(localStorage.getItem("userProfileData"))
                              .passportNumber
                          }
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                  alt="..."
                  className="avatar"
                  src={require("assets/img/emilyz.jpg")}
                />
                     <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Connect
                  </Button>
                  <Button
                    color="success"
                    style={{ right: "10px" }}
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Change Avatar
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Message
                  </Button>
                </div>
                    <h5 className="title">
                      {
                        JSON.parse(localStorage.getItem("userProfileData"))
                          .fullName
                      }
                    </h5>
                  </a>
                  <p className="description">
                    {JSON.parse(localStorage.getItem("userProfileData")).role}
                  </p>
                </div>
                {/* <div className="card-description">
                  Do not be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </div> */}
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round">
                   <FacebookRounded/>
                  </Button>
                  <Button className="btn-icon btn-round">
                    <X/>
                  </Button>
                  <Button className="btn-icon btn-round">
                    <Instagram/>
                  </Button>
                  <Button className="btn-icon btn-round">
                    <YouTube/>
                  </Button>
                  <Button className="btn-icon btn-round">
                  <i className="fa-brands fa-discord"></i>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
