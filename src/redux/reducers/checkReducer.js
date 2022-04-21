import { CHANGECHECKED } from '../constant';

const initialState = { value: false };
const changeCheckedReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGECHECKED: {
      return { ...state, value: action.payload };
    }
  }
  return state;
};
export default changeCheckedReducer;
