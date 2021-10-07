import { types } from "../types/types"
import { firebase, googleProvider } from "../Firebase/firebase.Config";

export const userInfo = (payload) => ({
  type: types.userInfo,
  payload
});

export const loginWithGoogleFirebase = (payload) => {
  return async (dispatch) => {
    const response = await firebase.auth().signInWithPopup(googleProvider);
    const {user} = response;
    console.log(response);
    const {displayName, email, uid} = user;
    dispatch(userInfo({displayName, email, uid}));
  }
};