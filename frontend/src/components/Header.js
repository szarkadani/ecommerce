import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { capitalize } from "lodash";
import { logout } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
function Header({ categories }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const cartItemsCount = cartItems.reduce(
    (count, item) => count + Number(item.qty),
    0
  );

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const isAdmin = userInfo && userInfo.isAdmin;
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>AmpedShop</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Product Categories" id="basic-nav-dropdown">
                {categories.map((category) => (
                  <LinkContainer to={`/${category}`} key={category}>
                    <NavDropdown.Item key={category}>
                      {capitalize(category)}
                    </NavDropdown.Item>
                  </LinkContainer>
                ))}
                <NavDropdown.Divider />
                <LinkContainer to="/">
                  <NavDropdown.Item>All Products</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              {userInfo && (
                <LinkContainer to="/newproduct">
                  <Nav.Link>New Product Form</Nav.Link>
                </LinkContainer>
              )}
              {isAdmin && (
                <LinkContainer to="/wishlist">
                  <Nav.Link>WishList</Nav.Link>
                </LinkContainer>
              )}

              <LinkContainer to="/cart">
                <Nav.Link>
                  <div className="position-relative">
                    <i className="fas fa-shopping-cart"></i>
                    {cartItemsCount > 0 && (
                      <Badge pill bg="danger" className="cart-badge">
                        {cartItemsCount}
                      </Badge>
                    )}
                  </div>
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
