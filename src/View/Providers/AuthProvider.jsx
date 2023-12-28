import { createContext, useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import { app } from "../Firebase/firebase.config";
import axios from "axios";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // providers
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  // create new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update user info
  const userProfile = (displayName, photoURL) => {
    const user = auth.currentUser;
    return updateProfile(user, { displayName, photoURL });
  };

  // user logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Continue with google
  const continueWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // continue with Facebook
  const continueWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  // refresh user profile
  const refreshUserProfile = () => {
    setLoading(true);
    const currentUser = auth.currentUser;

    if (currentUser) {
      userProfile(currentUser.displayName, currentUser.photoURL)
        .then(() => {
          // Assuming the user profile update was successful
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // jwt get and set
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", {
            email: currentUser.email,
          })
          .then((res) => {
            // console.log(res.data.token);
            localStorage.setItem("access-token", res.data.token);
          });
      } else {
        localStorage.removeItem("access-token");
      }
      // setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    userProfile,
    logOut,
    continueWithGoogle,
    continueWithFacebook,
    refreshUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
