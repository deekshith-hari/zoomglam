import * as Actions from "./actions";
import initialState from "../store/initialState";

export const ImagesReducer = (state = initialState.images, action) => {
  switch (action.type) {
    case Actions.FETCH_IMAGES:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
};