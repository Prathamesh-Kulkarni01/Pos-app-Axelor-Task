import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

import { useContext } from "react";
import { Context } from "../context/CartContext";

import { Alert, Button, Container } from "react-bootstrap";


function Cart() {
  const { cart, total,changeQuatity } = useContext(Context);

  return (
    <Container style={{ justifyContent: "left", margin: "8px 0px" }}>
      {cart.length === 0 ? (
        <Alert variant="warning">Cart is Empty</Alert>
      ) : (
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
                <div style={{justifyContent:'center',display:'flex'}}>
                  <Button  variant="danger"style={{fontSize:'20px',padding:'10px',lineHeight:'0',height:"25px",width:'10px',borderRadius:'4px',margin:'1px 5px 1px 0px'}} onClick={()=>changeQuatity(val.id,true)}><p style={{marginLeft:'-5px'}}>-</p> </Button>
                  {val.quantity}
                  <Button  variant="success"style={{fontSize:'20px',padding:'10px',lineHeight:'0',height:"25px",width:'10px',borderRadius:'4px',margin:'1px 5px'}} onClick={()=>changeQuatity(val.id,false)}><p style={{marginLeft:'-5px'}}>+</p> </Button>
                  </div>
                </div>
                
                <Badge bg="primary" pill>
                  {val.price * val.quantity}.00
                </Badge>
              </ListGroup.Item>
            );
          })}
          <ListGroup>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-center"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Net Total</div>
              </div>
              <Badge bg="primary" pill>
                {total}.00
              </Badge>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup>
      )}
    </Container>
  );
}

export default Cart;
