import React, { useContext } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { AiOutlineShoppingCart } from "react-icons/ai";

import { Context } from "../context/CartContext";
import NavDropdown from "react-bootstrap/NavDropdown";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import Cart from "./Cart";

function TopBar() {
  const { filterBy, sortBy, cart } = useContext(Context);
  
  const navFields = ["All", "Fruits", "Vegetables", "Seeds"];

  const sortFields = ["Title", "Price", "Category"];

  return (
    <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="pe-sm-2 m-0">
        <Navbar.Brand href="#home">Grocery Basket</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {navFields.map((item) => {
              return (
                <Nav.Link
                  key={item}
                  eventKey="default"
                  onClick={() => filterBy(item)}
                >
                  {item}
                </Nav.Link>
              );
            })}
            <NavDropdown title="Sort" id="collasible-nav-dropdown">
              {sortFields.map((item, key) => {
                return (
                  <NavDropdown.Item
                    key={key}
                    onClick={() => sortBy(item.toLowerCase())}
                  >
                    {"By" + item}
                  </NavDropdown.Item>
                );
              })}
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#clear/home"
                onClick={() => sortBy("clear")}
              >
                Clear
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavCart cart={cart} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;

export const NavCart = ({ cart }) => {
  return (
    <OverlayTrigger
      trigger="click"
      placement={"bottom-start"}
      rootClose={true}
      overlay={
        <Popover
        style={{minWidth:'440px'}}
         className=" mt-n15"
          id={`popover-positioned-bottom`}
        >
          <Popover.Header as="h3">Cart</Popover.Header>
          <Popover.Body>
            <Cart></Cart>
          </Popover.Body>
        </Popover>
      }
    >
      <Nav.Link className="text-white p-0 w-40 h-40 fs-4 position-absolute end-0 me-4">
        <p className=" d-lg-block d-none position-absolute mt-n1 ms-2 bg-danger rounded-circle  text-center fw-bold text-lg-center cart_budge ">
          {cart.length}
        </p>{" "}
        <AiOutlineShoppingCart />
      </Nav.Link>
    </OverlayTrigger>
  );
};
