import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useLocation, useNavigate } from "react-router-dom";
import QuantitySelector from "../components/QuantitySelector";

function CartPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const [showNeedToLogin, setshowNeedToLogin] = React.useState(false);

  const qty = searchParams.get("qty");

  const { id } = useParams();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [id, qty, dispatch]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkOutHandler = () => {
    if (!userInfo) {
      setshowNeedToLogin(true);
      setTimeout(() => {
        setshowNeedToLogin(false);
      }, 3000);
    } else {
      navigate("/shipping");
    }
  };

  return (
    <Row>
      {showNeedToLogin && (
        <Message
          variant="danger"
          className="position-fixed top-0 w-10 d-flex justify-content-center"
          style={{ zIndex: 9999 }}
          dismissible
        >
          You have to login before checkout!
        </Message>
      )}
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message variant="info">
            Your cart is empty <Link to="/">Go back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={3}>
                    <QuantitySelector
                      countInStock={item.countInStock}
                      qty={item.qty}
                      setQty={(value) =>
                        dispatch(addToCart(item.product, Number(value)))
                      }
                    />
                  </Col>
                  <Col md={1}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal (
                {cartItems.reduce((sum, item) => sum + Number(item.qty), 0)})
                items
              </h2>
              $
              {cartItems.reduce(
                (sum, item) => sum + Number(item.qty) * item.price,
                0
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkOutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}

export default CartPage;
