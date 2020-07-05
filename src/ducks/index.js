import * as API from 'api';
const SET_CART_STATE = 'app/SET_CART_STATE';
const SET_GOOD_LIST = 'app/SET_GOOD_LIST';
const TOGGLE_CART_LIST = 'app/TOGGLE_CART_LIST';
const SET_GOOD_ITEM_PREVIEW = 'app/SET_GOOD_ITEM_PREVIEW';

const initialState = {
  isOpenCart: false,
  goodsList: [],
  cartList: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CART_STATE:
      return {
        ...state,
        isOpenCart: action.payload
      };
      
    case SET_GOOD_LIST:
      return {
        ...state,
        goodsList: action.payload
      };
      
    case SET_GOOD_ITEM_PREVIEW:
      return {
        ...state,
        goodsList: state.goodsList.map(item =>
          item.id === action.payload.id ? { ...item, mainImage: action.payload.mainImage } : item)
      };
      
    case TOGGLE_CART_LIST:
      return {
        ...state,
        cartList: state.cartList.find((item) => item.id === action.payload.id)
          ? state.cartList.filter(item => item.id !== action.payload.id)
          : [...state.cartList, action.payload]
      };
    default: return state;
  }
}

export const setCartState = payload => {
  return { type: SET_CART_STATE, payload };
};

export const toggleCartList = payload => {
  return { type: TOGGLE_CART_LIST, payload };
};

export const setGoodList = payload => {
  return { type: SET_GOOD_LIST, payload };
};

export const setGoodItemPreview = payload => {
  return { type: SET_GOOD_ITEM_PREVIEW, payload };
};

export const fetchGoods = () => {
  return (dispatch) => {
    return API.fetchGoods()
      .then(({ payload }) => {
        dispatch(setGoodList(payload));
      });
  };
};
