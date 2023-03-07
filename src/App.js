import { Col, Row } from "react-bootstrap";
import { Grid } from "@mui/material";

import Nav from "./components/Nav";
import ItemHolder from "./components/ItemHolder";
import Cart from "./components/Cart";
import ToastHolder from "./components/ToastHolder";
import CartContext from "./context/CartContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CartContext>
        <Nav></Nav>
        <ToastHolder></ToastHolder>
        <Grid fluid="true">
          <Row className="m-0 p-0">
            <Col sm={8} className="m-0 p-0" >
              <ItemHolder></ItemHolder>
            </Col>
            <Col sm={4} className="m-0 p-0">
              <Cart></Cart>
            </Col>
          </Row>
        </Grid>
      </CartContext>
    </div>
  );
}

export default App;
