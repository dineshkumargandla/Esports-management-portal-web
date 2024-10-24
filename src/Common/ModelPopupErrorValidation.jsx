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
      <Modal.Body>
        <ul>
          {props.errormessage.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outlined"  color="error" onClick={props.onHide}>
        <Close className="fa-fw me-5" />
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
