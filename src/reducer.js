import * as CST from './constants';

const initialState = {
  text: '',
};

export default function hello(state = initialState, action = {}) {
  switch (action.type) {
    case CST.UPDATE_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
