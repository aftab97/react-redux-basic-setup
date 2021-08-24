import { SAVE_COMMENT } from "../actions/types";

let initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
