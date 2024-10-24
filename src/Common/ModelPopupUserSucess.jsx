import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import { LoginTwoTone, Close } from "@mui/icons-material";
import ButtonGroup from "@mui/joy/ButtonGroup";
import { useNavigate } from "react-router-dom";
export function ModelPopupUserSucess(props) {
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
        Congratulations warrior your are registerd with us with Warrior ID:{" "}
        {props.code}. Please login with your credentials and note down the
        Warrior ID for Further reference.
      </Modal.Body>
      <Modal.Footer>
        <ButtonGroup spacing="2rem">
          <Button
            variant="contained"
            color="success"
            onClick={handleLogin}
          >
            <LoginTwoTone />
            Login
          </Button>

          {/* <Button variant="contained" color="dark" onClick={props.onHide}>
            <Close />
            Close
          </Button> */}
        </ButtonGroup>
      </Modal.Footer>
    </Modal>
  );
}
