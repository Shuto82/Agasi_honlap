import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import NavItem from "react-bootstrap/esm/NavItem";

export const Navigationbar = () => {
  const { user, logOutUser } = useContext(UserContext);

  return (
    <>
      <Navbar expand="md" className="bg-info sticky-top fs-5">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              {user && user.uid === "XjjdcxlAOwgfcJ2cSNpUPgNSYZM2" && (
                <NavDropdown title="Műveletek" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/newpost">Új hír</NavDropdown.Item>
                  <NavDropdown.Item href="/pictures">Képek</NavDropdown.Item>
                  <NavDropdown.Item href="/sidebar">Oldalsáv</NavDropdown.Item>
                </NavDropdown>
              )}
              <Nav.Link href="/">Híreink</Nav.Link>
              <NavDropdown title="Rólunk" id="basic-nav-dropdown">
                <NavDropdown.Item href="/about">
                  A gyülekezetről
                </NavDropdown.Item>
                
              </NavDropdown>
              <NavDropdown title="Érdeklődőknek" id="basic-nav-dropdown">
                <NavDropdown.Item href="/worship">
                  Istentisztelet
                </NavDropdown.Item>
                <NavDropdown.Item href="/eucharist">Úrvacsora</NavDropdown.Item>
                <NavDropdown.Item href="/baptism">Keresztség</NavDropdown.Item>
                <NavDropdown.Item href="/confirmation">
                  Konfirmáció
                </NavDropdown.Item>
                <NavDropdown.Item href="/wedding">
                  Házasságkötés
                </NavDropdown.Item>
                <NavDropdown.Item href="/funeral">Temetés</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Elérhetőségeink</Nav.Link>
              {user && <Nav.Link href="/gallery">Galéria</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="flex-row-reverse">
            {!user ? (
              <Nav.Link href="/signin">Bejelentkezés</Nav.Link>
            ) : (
              <NavItem
                style={{ cursor: "pointer" }}
                onClick={() => logOutUser()}
              >
                Kijelentkezés
              </NavItem>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
