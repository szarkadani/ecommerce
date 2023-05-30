import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loading from "../components/Loading";
import Message from "../components/Message";

function WishList() {
  const category = "wishlist";

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productlist);
  const { error, loading, products } = productList;
  useEffect(() => {
    dispatch(listProducts(category));
  }, [category, dispatch]);

  return (
    <div>
      <h2>{category || "Products"}</h2>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger"> {error} </Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={10} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default WishList;
