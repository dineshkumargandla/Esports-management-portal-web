import * as React from "react";
import Paper from "@mui/material/Paper";
//import Table from '@mui/material/Table';
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Card, CardHeader, CardTitle, Row, Col, Table } from "reactstrap";
import { GetAllOrganizationDetails } from "../../../api/OrganizationServiceEndpoint";

export function OrganizationList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  let dataCount = 0;
  


  React.useEffect(() => {
    GetAllOrganizationDetails()
      .then((response) => {
        localStorage.setItem("allOrganizationData", JSON.stringify(response));
      })
      .catch((error) => {
        // setModalShow(true);
        // if (error.status === 401) {
        //   authValidationErrors.push(
        //     "Invalid Credentials,please check the credentials and try again"
        //   );
        // }
        // if (error.status === 404) {
        //   authValidationErrors.push(
        //     "User " +
        //       loginFormData.email +
        //       " not found in the data base, Please register and try again."
        //   );
        // }
        // if (error.status === 500) {
        //   authValidationErrors.push("Backend Service not found");
        // }
        // setErrorMessage(authValidationErrors);
      });
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    {
      id: "organizationName",
      label: "Organization Name",
      minWidth: 150,
      align: "center",
    },
    {
      id: "organizationCode",
      label: "Organization Code",
      minWidth: 100,
      align: "center",
    },
    {
      id: "owner",
      label: "Owner",
      minWidth: 100,
      align: "center",
    },
    {
      id: "email",
      label: "email",
      minWidth: 100,
      align: "center",
    },
    {
      id: "contactNumber",
      label: "Contact Number",
      minWidth: 150,
      align: "center",
      // format: (value) => value.toFixed(2),
    },
  ];

  function createData(
    organizationName,
    organizationCode,
    owner,
    email,
    contactNumber
  ) {
    return { organizationName, organizationCode, owner, email, contactNumber };
  }

  const rows = [
    JSON.parse(localStorage.getItem("allOrganizationData")).map((item) => {
      return createData(
        item.organizationName,
        item.organizationCode,
        item.organizationOwner,
        item.email,
        item.contactNumber
      );
    }),
  ];

  console.log(rows);
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Organization List</CardTitle>
              </CardHeader>
              <Paper
                sx={{
                  width: "100%",
                  overflow: "hidden",
                  "background-color": "transparent",
                }}
              >
                {/* <TableContainer sx={{ maxHeight: 3000 }}> */}
                <TableContainer>
                  <Table className="tablesorter" responsive>
                    <TableHead className="text-primary">
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows
                        .map((row) => {
                          return row
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          ).map((item) => {
                            dataCount =row.length;
                            return (
                              <TableRow hover role="table" tabIndex={-1}>
                                {columns.map((column) => {
                                  const value = item[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          });
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 50,100]}
                  component="div"
                  count={dataCount}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
