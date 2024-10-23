import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import {
  Close,
} from "@mui/icons-material";

export function ModelPopUp(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className = "d-flex justify-content-center bg-gradient-dark">
        <Modal.Title className = "textcolor" id="contained-modal-title-vcenter" >
          Please check the following Validation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className = "bg-gradient-light">
        <ul>
          {props.errormessage.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </Modal.Body>
      <Modal.Footer className = "bg-gradient-dark">
        <Button variant="outlined" onClick={props.onHide}>
        <Close className="fa-fw me-5" />
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
