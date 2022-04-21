import * as ACTION_TYPES from '../actions/action_types';
export const initialState = {
  stateprop1: false,
};

export const HooksReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ACTION_TYPES.SUCCESS:
      return {
        ...state,
        stateprop1: true,
      };
    case ACTION_TYPES.FAILURE:
      return {
        ...state,
        stateprop1: false,
      };
    default:
      return state;
  }
};
