import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import {  Close } from "@mui/icons-material";
import ButtonGroup from "@mui/joy/ButtonGroup";
import { useNavigate } from "react-router-dom";
export function ModelPopupOrganizationSucess(props) {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    navigate("/auth/login");
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        Organization has been created sucessfully with Organization ID:{" "}
        {props.code}
        <br />
        Please wait till the verification is done and active the account, if not
        active in 2 days Please contact below admin for more details.
        <br />
        For further easy information please save your organization id.
      </Modal.Body>
      <Modal.Footer>
        <ButtonGroup spacing="2rem">
          <Button variant="contained" color="success" onClick={handleLogin}>
            <Close />
            Close
          </Button>
        </ButtonGroup>
      </Modal.Footer>
    </Modal>
  );
}
