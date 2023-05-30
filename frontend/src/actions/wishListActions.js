import {
  WISHLIST_ADD_REQUEST,
  WISHLIST_ADD_SUCCESS,
  WISHLIST_ADD_FAIL,
  WISHLIST_LIST_REQUEST,
  WISHLIST_LIST_SUCCESS,
  WISHLIST_LIST_FAIL,
} from "../constants/wishlistConstants";
import axios from "axios";

export const addWishListProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: WISHLIST_ADD_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/products/add/", product, config);

    dispatch({
      type: WISHLIST_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WISHLIST_ADD_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listWishListProducts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: WISHLIST_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/products/wishlist/`, config);

    dispatch({
      type: WISHLIST_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WISHLIST_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
