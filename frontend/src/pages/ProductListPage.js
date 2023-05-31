import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loading from "../components/Loading";
import Message from "../components/Message";

function ProductListPage() {
  const { category } = useParams();
  const formattedCategory = category
    ? category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
    : "Products";

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productlist);
  const { error, loading, products } = productList;
  useEffect(() => {
    dispatch(listProducts(category));
  }, [category, dispatch]);

  const filteredProducts = category
    ? products.filter(
        (product) =>
          product.category === category && product.category !== "wishlist"
      )
    : products.filter((product) => product.category !== "wishlist");

  return (
    <div>
      <h2>{formattedCategory || "Products"}</h2>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger"> {error} </Message>
      ) : (
        <Row>
          {filteredProducts.map((product) => (
            <Col key={product.id} sm={10} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default ProductListPage;
