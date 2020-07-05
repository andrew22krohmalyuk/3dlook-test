const SET_CART_STATE = 'app/SET_CART_STATE';

const initialState = {
  isOpenCart: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CART_STATE:
      return {
        ...state,
        isOpenCart: action.payload
      };
    default: return state;
  }
}

export function setCartState(payload) {
  return { type: SET_CART_STATE, payload };
}
