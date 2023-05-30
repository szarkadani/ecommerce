import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { addWishListProduct } from "../actions/wishListActions";
import Message from "../components/Message";
import { WISHLIST_ADD_RESET } from "../constants/wishlistConstants";

function NewProductPage() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const wishlistAdd = useSelector((state) => state.wishlistAdd);
  const { error, success } = wishlistAdd;

  useEffect(() => {
    if (success) {
      setName("");
      setBrand("");
      setDescription("");
      setImage(null);
      /* dispatch({ type: WISHLIST_ADD_RESET }); */
    }
  }, [success, error, dispatch]);

  const addProduct = () => {
    dispatch(
      addWishListProduct({
        name: name,
        brand: brand,
        description: description,
        image: image,
      })
    );
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <FormContainer>
      <h1>New Product</h1>
      {error && <Message variant="danger">{error}</Message>}
      {success && (
        <Message variant="success">
          Product added to WishList sucessfully!
        </Message>
      )}
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="brand">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter product brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Form.Group>
        <Button
          variant="primary my-2"
          type="button"
          onClick={addProduct}
          disabled={name == "" || brand == "" || description == ""}
        >
          Add Product Wish
        </Button>
      </Form>
    </FormContainer>
  );
}

export default NewProductPage;
