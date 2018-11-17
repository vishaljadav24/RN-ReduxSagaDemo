import { FETCHING_DATA, FETCHING_USER } from "./constants";

export function fetchData() {
  console.log("Called Data Action");
  return {
    type: FETCHING_DATA
  };
}


export function fetchUser() {
  console.log("Called User Action");
  return {
    type: FETCHING_USER
  };
}