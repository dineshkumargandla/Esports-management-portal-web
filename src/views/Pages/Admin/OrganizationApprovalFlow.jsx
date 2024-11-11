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
import { ApproveOrganization , GetAllPendingApprovalOrganizationDetails} from "../../../api/OrganizationServiceEndpoint";

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

  const handleApproval = (item) => {
    console.log("Button Clicked:", item.organizationCode);
    let organizationCode = item.organizationCode;
    let action = "Approved";
    const approvalData = { organizationCode, action };
    ApproveOrganization(approvalData)
      .then((response) => {
        console.log("Response:", response);
        GetAllPendingApprovalOrganizationDetails()
        .then((response) => {
          localStorage.removeItem("allPendingApprovalOrganizationData");
          localStorage.setItem("allPendingApprovalOrganizationData", JSON.stringify(response));
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        })
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const handleReject = (item) => {
    console.log("Button Clicked:", item.organizationCode);
    let organizationCode = item.organizationCode;
    let action = "Rejected";
    let comments = "Comment";
    const approvalData = { organizationCode, action, comments };
    ApproveOrganization(approvalData)
      .then((response) => {
        console.log("Response:", response);
        GetAllPendingApprovalOrganizationDetails()
        .then((response) => {
          localStorage.removeItem("allPendingApprovalOrganizationData");
          localStorage.setItem("allPendingApprovalOrganizationData", JSON.stringify(response));
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        })
      })
      .catch((error) => {
        console.log("Error:", error);
      });
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
                                    className="btn-icon btn-round"
                                    color="success"
                                    title="Approve"
                                    onClick={() => handleApproval(item)}
                                  >
                                    <EmojiEmotions />
                                  </Button>
                                </Col>
                                <Col className="pl-md-2" md="4">
                                  <Button
                                    className="btn-icon btn-round"
                                    color="danger"
                                    title="Reject"
                                    onClick={() => handleReject(item)}
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
