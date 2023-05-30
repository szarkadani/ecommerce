import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCES,
  PRODUCT_LIST_FAIL,
  PRODUCT_CATEGORY_REQUEST,
  PRODUCT_CATEGORY_SUCCES,
  PRODUCT_CATEGORY_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCES,
  PRODUCT_DETAIL_FAIL,
} from "../constants/productConstants";

export const listProducts = (category) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get(`/api/products/category/${category}`);
    dispatch({
      type: PRODUCT_LIST_SUCCES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listCategories = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_CATEGORY_REQUEST });
    const { data } = await axios.get("/api/products/categories/");

    dispatch({
      type: PRODUCT_CATEGORY_SUCCES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAIL_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: PRODUCT_DETAIL_SUCCES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
