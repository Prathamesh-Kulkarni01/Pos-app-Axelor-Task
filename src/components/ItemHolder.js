import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import React, { useContext } from "react";
import { Context } from "../context/CartContext";

const ItemHolder = () => {
  const { displayData } = useContext(Context);
  return (
    <Container style={{ padding: "10px" }}>
      <Row xs={0} md={0} className="d-sm-flex align-items-md-center">
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
      style={{ width: "188px", height: "294px" }}
      className="w-188 item d-flex justify-content-center p-2 m-3 rounded"
    >
      <Card.Img
        variant="top"
        width={154.33}
        height={155}
        style={{ objectFit: "contain" }}
        className="p-2"
        src={`../${props.item.url}`}
      />
      <Card.Body className="pt-0">
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
