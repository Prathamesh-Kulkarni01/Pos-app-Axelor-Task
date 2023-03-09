import { Button, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import React, { useContext } from "react";
import { Context } from "../context/CartContext";


const ItemHolder = () => {
  const {displayData}=useContext(Context);
  return (
    <Container style={{ padding: "10px" }}>
      <Row xs={0} md={0} className="d-sm-flex justify-content-sm-center align-items-md-center">
        {displayData.map((val) => {
          return <ProductItem key={val.id} item={val}></ProductItem>;
        })}
      </Row>
    </Container>
  );
};

export default ItemHolder;

export const ProductItem = (props) => {
  const { onItemAdd } = useContext(Context);
  return (
    <Card
    
      style={{
        width: "188px",
        height: "294px",
        justifyContent: "center",
        display: "flex",
        padding: " 8px",
        margin: "0px 12px",
        borderRadius: "3px",
       
      }}
      className="item"
    
    >
      <Card.Img
        variant="top"
        width={154.33}
        height={155}
        style={{ padding: "8px", objectFit: "contain" }}
        src={`../${props.item.url}`}
      />
      <Card.Body style={{ paddingTop: "0" }}>
        <Card.Title>{props.item.title}</Card.Title>
        <Card.Text style={{ fontWeight: "600" }}>
          ₹ {props.item.price}
        </Card.Text>
        <Button variant="primary" onClick={() => onItemAdd(props?.item)}>
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
};
