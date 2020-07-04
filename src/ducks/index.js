const SET_USER = 'app/SET_USER';

const initialState = {
  user: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    default: return state;
  }
}

export function setUser(payload) {
  return { type: SET_USER, payload };
}
