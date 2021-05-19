import _ from "lodash";

import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "../actions/types";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    //   return [...state, action.payload];
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    //   return [...state];
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    //   return [...state.find((stream) => stream.id == action.payload.id)];
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    //   return [
    // ...state.map((stream) =>
    //   stream.id === action.payload.id ? action.payload : stream
    // ),
    //   ];
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    //   return [...state.filter((stream) => stream.id != action.payload.id)];

    default:
      return state;
  }
};
export default streamReducer;
