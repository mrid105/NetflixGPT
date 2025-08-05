import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    //Validate the form
    const message = isSignInForm
      ? checkValidData(email.current.value, password.current.value)
      : checkValidData(
          email.current.value,
          password.current.value,
          name.current.value
        );
    setErrorMessage(message);

    if (message) return;
    //Else Sign In and Sign Up

    if (!isSignInForm) {
      //SignUp Logic
      setLoading(true);
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = user;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              setLoading(false);
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      //Sign In Logic
      setLoading(true);
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setLoading(false);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover md:h-auto"
          src={BG_IMG}
          alt="bg-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-opacity-80 text-white w-full md:w-4/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="my-2 p-4 w-full bg-gray-800 text-gray-200"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          ref={email}
          className="my-2 p-4 w-full bg-gray-800 text-gray-200"
          type="text"
          placeholder="Email Address"
        ></input>
        <input
          ref={password}
          className="my-2 p-4 w-full  bg-gray-800 text-gray-200"
          type="password"
          placeholder="Password"
        ></input>
        <p className="text-red-500 p-4">{errorMessage}</p>
        <button
          className="p-4 my-2 bg-red-700 rounded-lg w-full flex justify-center items-center"
          onClick={handleButtonClick}
          disabled={loading}
        >
          {loading ? (
            <span className="flex justify-center items-center">
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Loading...
            </span>
          ) : isSignInForm ? (
            "Sign In"
          ) : (
            "Sign Up"
          )}
        </button>
        {isSignInForm ? (
          <p className="py-4">
            {" "}
            New to Netflix?{" "}
            <span className="cursor-pointer" onClick={toggleSignInForm}>
              Sign Up Now
            </span>
          </p>
        ) : (
          <p className="py-4">
            {" "}
            Already a user?{" "}
            <span className="cursor-pointer" onClick={toggleSignInForm}>
              Sign In
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
