import {
  WISHLIST_ADD_REQUEST,
  WISHLIST_ADD_SUCCESS,
  WISHLIST_ADD_FAIL,
  WISHLIST_ADD_RESET,
  WISHLIST_LIST_REQUEST,
  WISHLIST_LIST_SUCCESS,
  WISHLIST_LIST_FAIL,
} from "../constants/wishlistConstants";

export const wishlistAddReducer = (state = {}, action) => {
  switch (action.type) {
    case WISHLIST_ADD_REQUEST:
      return {
        loading: true,
      };

    case WISHLIST_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        product: action.payload,
      };

    case WISHLIST_ADD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case WISHLIST_ADD_RESET:
      return {};

    default:
      return state;
  }
};

export const listWishListProductsReducer = (
  state = { products: [] },
  action
) => {
  switch (action.type) {
    case WISHLIST_LIST_REQUEST:
      return {
        loading: true,
      };

    case WISHLIST_LIST_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };

    case WISHLIST_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
