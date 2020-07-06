import * as API from 'api';
const SET_CART_STATE = 'app/SET_CART_STATE';
const SET_GOOD_LIST = 'app/SET_GOOD_LIST';
const TOGGLE_CART_LIST = 'app/TOGGLE_CART_LIST';
const SET_GOOD_ITEM_PREVIEW = 'app/SET_GOOD_ITEM_PREVIEW';
const SET_FILTER = 'app/SET_FILTER';
const SORT_FROM_EXPENSIVE_TO_CHEAP = 'app/SORT_FROM_EXPENSIVE_TO_CHEAP';
const SORT_FROM_CHEAP_TO_EXPENSIVE = 'app/SORT_FROM_CHEAP_TO_EXPENSIVE';
const FILTER_ONLY_POPULAR = 'app/FILTER_ONLY_POPULAR';

const initialState = {
  isOpenCart: false,
  activeFilter: null,
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
      
    case SET_FILTER:
      return {
        ...state,
        activeFilter: action.payload
      };
      
    case FILTER_ONLY_POPULAR:
      return {
        ...state,
        goodsList: state.goodsList.filter(item => item.popularRate >= 3)
      };
      
    case SORT_FROM_CHEAP_TO_EXPENSIVE:
      return {
        ...state,
        goodsList: [...state.goodsList.sort((current, next) => current.price - next.price)]
      };
      
    case SORT_FROM_EXPENSIVE_TO_CHEAP:
      return {
        ...state,
        goodsList: [...state.goodsList.sort((current, next) => next.price - current.price)]
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

export const setFilter = payload => {
  return { type: SET_FILTER, payload };
};

export const sortFromExpensiveToCheap = payload => {
  return { type: SORT_FROM_EXPENSIVE_TO_CHEAP, payload };
};

export const sortFromCheapToExpensive = payload => {
  return { type: SORT_FROM_CHEAP_TO_EXPENSIVE, payload };
};

export const filterPopular = payload => {
  return { type: FILTER_ONLY_POPULAR, payload };
};

export const fetchGoods = () => dispatch =>
  API.fetchGoods()
    .then(({ payload }) => {
      dispatch(setGoodList(payload));
    });
