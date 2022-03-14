import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { authSlice } from "../Reducers/Auth";
import store from "../store";

const { actions } = authSlice;
const { dispatch } = store;

export const register = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      dispatch(actions.REGISTER_WITH_EMAIL(user));
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(error.message);
      const errorMessage = error.message;
      // ..
    });
};

export const continueWithGoogle = () => {
  //  After Auth Check If User Exists
  //  If user exists then just login and dont save in database
  //  If user doesnt exist then save a user in firestore user collection
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      dispatch(actions.REGISTER_WITH_GOOGLE({ user, token }));
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export const registerWithPhone = (phoneNumber) => {
};

export const logOut = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    dispatch(actions.CLEAR_AUTH());
  });
};
