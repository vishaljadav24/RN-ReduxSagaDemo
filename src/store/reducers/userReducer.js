import {
  FETCHING_USER,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_FAILURE
} from "../constants";
const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
};

export default function userReducer(state = initialState, action) {
  console.log("Called User Reducer ", action);
  switch (action.type) {
    case FETCHING_USER:
      return {
        ...state,
        data: [],
        isFetching: true
      };
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      };
    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
}
