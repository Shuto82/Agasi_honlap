import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import NavItem from "react-bootstrap/esm/NavItem";
import { NavLink } from "react-router-dom";

const muveletekMenu = [
  { path: "newpost", name: "Új hír" },
  { path: "pictures", name: "Képek" },
  { path: "sidebar", name: "Oldalsáv" },
];

const rolunkMenu = [
  { path: "about", name: "A gyülekezetről" },
  { path: "council", name: "A vezetőségről" },
];
const erdeklodoknekMenu = [
  { path: "worship", name: "Istentisztelet" },
  { path: "eucharist", name: "Úrvacsora" },
  { path: "baptism", name: "Keresztség" },
  { path: "confirmation", name: "Konfirmáció" },
  { path: "wedding", name: "Házasságkötés" },
  { path: "funeral", name: "Temetés" },
];
export const Navigationbar = ({boxStyle}) => {
  const { user, admin, logOutUser } = useContext(UserContext);

  return (
    <>
      <Navbar
        expand="md"
        className="sticky-top fs-5"
        style={{ backgroundColor: "#e6f772" }}
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              {user && user.email === admin && (
                <NavDropdown
                  title="Műveletek"
                  id="basic-nav-dropdown"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {muveletekMenu.map((obj) => (
                    <NavLink
                      style={boxStyle}
                      key={obj.path}
                      to={obj.path}
                    >
                      {obj.name}
                    </NavLink>
                  ))}
                </NavDropdown>
              )}
              <Nav.Link href="/">Híreink</Nav.Link>
              <NavDropdown
                title="Rólunk"
                id="basic-nav-dropdown"
                style={{ display: "flex", flexDirection: "column" }}
              >
                {rolunkMenu.map((obj) => (
                  <NavLink
                    style={boxStyle}
                    key={obj.path}
                    to={obj.path}
                  >
                    {obj.name}
                  </NavLink>
                ))}
              </NavDropdown>
              <NavDropdown
                title="Érdeklődőknek"
                id="basic-nav-dropdown"
                style={{ display: "flex", flexDirection: "column" }}
              >
                {erdeklodoknekMenu.map((obj) => (
                  <NavLink
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "black",
                      margin: "5px"
                    }}
                    key={obj.path}
                    to={obj.path}
                  >
                    {obj.name}
                  </NavLink>
                ))}
              </NavDropdown>
              <Nav.Link href="#">
                <NavLink
                  to="contact"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Elérhetőségeink
                </NavLink>{" "}
              </Nav.Link>
              {user && (
                <Nav.Link href="#">
                  <NavLink to="gallery" style={{
                    display: "block",
                    textDecoration: "none",
                    color: "black",
                  }}> Galéria</NavLink>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="flex-row-reverse">
            {!user ? (
              <Nav.Link href="#">
                <NavLink
                  to="signin"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Bejelentkezés
                </NavLink>{" "}
              </Nav.Link>
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
