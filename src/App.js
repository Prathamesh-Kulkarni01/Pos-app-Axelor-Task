import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import TopBar from "./components/Nav";
import ItemHolder from "./components/ItemHolder";
import Cart from "./components/Cart";
import ToastHolder from "./components/ToastHolder";
import CartContext from "./context/CartContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CartContext>
        <TopBar />
        <ToastHolder />
        <Container fluid className="mt-5">
          <Row className="m-0 p-0">
            <Col sm={8} className="m-0 p-0">
              <ItemHolder />
            </Col>
            <Col sm={4} className="m-0 p-0">
              <Cart />
            </Col>
          </Row>
        </Container>
      </CartContext>
    </div>
  );
}

export default App;
