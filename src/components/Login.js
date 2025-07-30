import React, { useState } from "react";
import Header from "./Header";
const Login = () => {

  const [isSignInForm,setIsSignInForm]=useState(true)
  
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/CA-en-20250721-TRIFECTA-perspective_26e23158-236f-425e-941d-3c8f37bdd62b_large.jpg"
          alt="bg-image"
        />
      </div>
      <form className="bg-opacity-80 text-white w-4/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0">
        <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && ( <input className="my-2 p-4 w-full bg-gray-800 text-gray-200" type="text" placeholder="Full Name"></input>)}
        <input className="my-2 p-4 w-full bg-gray-800 text-gray-200" type="text" placeholder="Email Address"></input>
        <input className="my-2 p-4 w-full  bg-gray-800 text-gray-200" type="password" placeholder="Password"></input>
        <button className="p-4 my-2 bg-red-700 rounded-lg w-full">{isSignInForm? "Sign In" : "Sign Up"}</button>
        {isSignInForm? (<p className="py-4"> New to Netflix? <span className="cursor-pointer" onClick={toggleSignInForm}>Sign Up Now</span></p>) : (<p className="py-4"> Already a user? <span className="cursor-pointer" onClick={toggleSignInForm}>Sign In</span></p>)}
      </form>
    </div>
  );
};

export default Login;
