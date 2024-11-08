import * as React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
} from "reactstrap";

import { EmojiEmotions, ThumbDown } from "@mui/icons-material";

export function OrganizationApprovalFlow() {
  const [modalShow, setModalShow] = React.useState(false);

  let orgData = {};
  let value = "";
  const handleRowClick = (item) => {
    value = item.organizationCode;
    orgData = item;
    setModalShow(true);
    console.log("Row Clicked:", orgData);
    console.log("Row Clicked1:", item.organizationCode);

    console.log("Row Clicked2:", modalShow);

  };



  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Organizarion Approval</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th className="text-center">Organization Name</th>
                      <th className="text-center">Organization Code</th>
                      <th className="text-center">Owner</th>
                      <th className="text-center">email</th>
                      <th className="text-center">Contact Number</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {JSON.parse(
                      localStorage.getItem("allPendingApprovalOrganizationData")
                    ).map((item) => {
                      return (
                        <tr
                        onClick={() => handleRowClick(item)}
                          
                          style={{ cursor: "pointer" }}
                        >
                          <td className="text-center">
                            {item.organizationName}
                          </td>
                          <td className="text-center">
                            {item.organizationCode}
                          </td>
                          <td className="text-center">
                            {item.organizationOwner}
                          </td>
                          <td className="text-center">{item.email}</td>
                          <td className="text-center">{item.contactNumber}</td>
                          <td className="text-center">
                            <div className="button-container">
                              <Row>
                                <Col className="pr-md-1" md="6">
                                  <Button
                                    className="btn-icon btn-round sucess"
                                    color="success"
                                    title="Approve"
                                  >
                                    <EmojiEmotions />
                                  </Button>
                                </Col>
                                <Col className="pl-md-2" md="4">
                                  <Button
                                    className="btn-icon btn-round sucess"
                                    color="danger"
                                    title="Reject"
                                  >
                                    <ThumbDown />
                                  </Button>
                                </Col>
                              </Row>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
