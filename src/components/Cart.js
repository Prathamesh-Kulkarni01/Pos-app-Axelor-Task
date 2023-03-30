import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";

import { useContext } from "react";
import { Context } from "../context/CartContext";

import { Alert, Button, Container } from "react-bootstrap";

const QuantityButtons = styled(Button)`
  font-size: 20px;
  padding: 10px;
  line-height: 0;
  height: 25px;cccccc
  width: 10px;
  border-radius: 4px;
  margin: 1px 5px 1px 4px;
  color: #fff;
  border: none;
`;
function Cart() {
  const { cart, total, changeQuantity } = useContext(Context);

  if (!cart?.length) {
    return (
      <Alert className="my-3" variant="warning">
        Cart is Empty
      </Alert>
    );
  }
  return (
    <Container className=" my-3">
      <ListGroup as="ol" numbered>
        {cart.map((val) => {
          return (
            <ListGroup.Item
              key={val.id}
              as="li"
              className="d-flex justify-content-between align-items-center"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{val.title}</div>
                <div className="d-flex justify-content-center">
                  <QuantityButtons
                    variant="danger"
                    onClick={() => {
                      changeQuantity(val.id, true);
                    }}
                  >
                    <p style={{ marginLeft: "-5px" }}>-</p>{" "}
                  </QuantityButtons>
                  {val.quantity}
                  <QuantityButtons
                    variant="success"
                    onClick={() => changeQuantity(val.id, false)}
                  >
                    <p style={{ marginLeft: "-5px" }}>+</p>{" "}
                  </QuantityButtons>
                </div>
              </div>
              <Badge bg="primary" pill>
                {val.price * val.quantity}.00
              </Badge>
            </ListGroup.Item>
          );
        })}
        <ListGroup>
          <ListGroup.Item as="li" className="d-flex rounded-0 border-top-0">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Net Total</div>
            </div>
            <Badge bg="primary" pill>
              {total}.00
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </ListGroup>
    </Container>
  );
}

export default Cart;
