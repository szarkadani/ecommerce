import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import QuantitySelector from "./QuantitySelector";
import Message from "../components/Message";

function Product({ product }) {
  const dispatch = useDispatch();
  const [qty, setQty] = React.useState(1);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const addToCartHandler = () => {
    dispatch(addToCart(product.id, qty));
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div>
      {showSuccess && (
        <Message variant="success" dismissible>
          Product added to cart successfully!
        </Message>
      )}
      <Card className="my-3 py-3">
        <Link to={`/product/${product.id}`}>
          <Card.Img src={product.image} />
        </Link>
        <Card.Body>
          <Link to={`/product/${product.id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          {product.category != "wishlist" && (
            <Card.Text as="h4">${product.price}</Card.Text>
          )}
          {product.category != "wishlist" && (
            <Card.Text>
              {product.countInStock > 0
                ? product.countInStock + " In Stock"
                : "Out of Stock"}
            </Card.Text>
          )}
          <Card.Text>{product.description}</Card.Text>

          {product.countInStock > 0 && (
            <Card.Text>
              <QuantitySelector
                countInStock={product.countInStock}
                qty={qty}
                setQty={setQty}
              />
            </Card.Text>
          )}
          {product.category != "wishlist" && (
            <Button
              onClick={addToCartHandler}
              className="btn-block"
              disabled={product.countInStock < 1}
              type="button"
            >
              Add to cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
