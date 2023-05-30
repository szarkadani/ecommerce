import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Message from "./components/Message";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "./actions/productActions";
import ProfilePage from "./pages/ProfilePage";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderPage from "./pages/OrderPage";
import NewProductPage from "./pages/NewProductPage";
import WishList from "./pages/WishList";

function App() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.productCategorylist);
  const { error, loading, categories } = categoryList;
  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);
  return (
    <Router className="py-3">
      <Header categories={categories} />
      <main className="py-3">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="danger"> {error} </Message>
        ) : (
          <Container>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              {categories.map((category) => (
                <Route
                  key={category}
                  path="/:category"
                  element={<ProductListPage category={category} />}
                />
              ))}
              <Route path="/cart/:id?" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/shipping" element={<ShippingPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/placeorder" element={<PlaceOrderPage />} />
              <Route path="/order/:id" element={<OrderPage />} />
              <Route path="/register/?" element={<RegisterPage />} />
              <Route path="/newproduct/" element={<NewProductPage />} />
              <Route path="/wishlist/" element={<WishList />} />
            </Routes>
          </Container>
        )}
      </main>
      <Footer />
    </Router>
  );
}

export default App;
