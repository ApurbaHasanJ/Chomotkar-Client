import { createContext, useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
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

  // signInWithPhone
  const signInWithPhone = async(phoneNumber) => {
    setLoading(true);
  
    try {
      // Send verification code to the provided phone number
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber);
  
      // SMS sent. Prompt user to type the code from the message,
      // then sign the user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      setLoading(false);
    } catch (error) {
      console.error("Error:", error.message);
      setLoading(false);
      // Handle errors, e.g., display an error message to the user
    }
  };

  // Update user info
  const userProfile = (displayName, photoURL) => {
    const user = auth.currentUser;
    return updateProfile(user, { displayName, photoURL });
  };

  const updateAddress = (address) => {
    const currentUser = auth.currentUser;
    // Assume you have a field 'address' in your user profile
    return updateProfile(currentUser, { address });
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
        .catch(() => {
          // console.log(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // jwt get and set
      if (currentUser) {
        axios
          .post("https://chomotkar-server-iota.vercel.app/jwt", {
            email: currentUser.email,
          })
          .then((res) => {
            // console.log(res.data.token);
            localStorage.setItem("access-token", res.data.token);

            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signInWithPhone,
    signIn,
    userProfile,
    updateAddress,
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
