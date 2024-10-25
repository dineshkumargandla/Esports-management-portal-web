import React from "react";

import { Container, Nav, NavItem, NavLink } from "reactstrap";

export function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
           by{"Dinesh Kumar Gandla "}
        </div>
      </Container>
    </footer>
  );
}
