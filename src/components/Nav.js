import { useContext } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { AiOutlineShoppingCart } from "react-icons/ai";

import { Context } from "../context/CartContext";
import NavDropdown from "react-bootstrap/NavDropdown";

function TopBar() {
  const { filterBy, sortBy, cart } = useContext(Context);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="p-0 m-0">
        <Navbar.Brand href="#home">Grocery Basket</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              eventKey="default"
              href="#features"
              onClick={() => filterBy("All")}
            >
              All
            </Nav.Link>
            <Nav.Link href="#pricing" onClick={() => filterBy("fruit")}>
              Fruits
            </Nav.Link>
            <Nav.Link href="#pricing" onClick={() => filterBy("vegetables")}>
              Vegetables
            </Nav.Link>
            <Nav.Link href="#pricing" onClick={() => filterBy("seeds")}>
              Seeds
            </Nav.Link>
            <NavDropdown title="Sort" id="collasible-nav-dropdown">
              <NavDropdown.Item
                href="#action/3.1"
                onClick={() => sortBy("title")}
              >
                By Title
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                onClick={() => sortBy("price")}
              >
                By Price
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                onClick={() => sortBy("category")}
              >
                By Category
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action/3.4"
                onClick={() => sortBy("clear")}
              >
                Clear
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
         
            <Nav.Link
              href="#deets"
              style={{
                color: "white",
                padding:'0px',
                width: "40px",
                float:'right',
                position:'absolute',
                right:'10px',
                height: "40px",
                fontSize: "20px",
              }}
            >
              <p className="d-none d-xl-block d-xxl-block"
                style={{
                  position: "absolute",
                  marginTop: "-1px",
                  marginLeft: "10px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  minWidth: "18px",
                  height: "18px",
                  fontSize: "12px",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                {cart.length}
              </p>{" "}
              <AiOutlineShoppingCart />
            </Nav.Link>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
