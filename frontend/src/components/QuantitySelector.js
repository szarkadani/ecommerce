import React from "react";
import { Form } from "react-bootstrap";

function QuantitySelector({ countInStock, qty, setQty }) {
  return (
    <Form.Control
      as="select"
      value={qty}
      onChange={(e) => setQty(Number(e.target.value))}
    >
      {[...Array(countInStock).keys()].map((x) => (
        <option key={x + 1} value={x + 1}>
          {x + 1}
        </option>
      ))}
    </Form.Control>
  );
}

export default QuantitySelector;
