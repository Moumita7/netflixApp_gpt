import { useState } from "react";
import Header from "./Header";

const Login = () => {
  let [isSignIn,setIsSignIn]=useState(true)

  let toggleSignIn=()=>{
    setIsSignIn(!isSignIn)

  }
  return (
    // <div className="brightness-[70%]" >
    <div className="">
      <Header />
      <div className="absolute">
        <div className="">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt=""
          />
        </div>
      </div>

      <form className="absolute py-16 rounded-md bg-opacity-80 flex flex-col justify-center items-center w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white   ">
       <p> {isSignIn? "Sign In": "SignUp"}</p>
       {
        !isSignIn &&    <input
          type="text"
          placeholder="Full name"
          className="w-[80%] p-2 m-2  rounded-md bg-gray-600"
        />
       }
        <input
          type="text"
          placeholder="email"
          className="w-[80%] p-2 m-2  rounded-md bg-gray-600"
        />
        <input
          type="password"
          placeholder="password"
          className="w-[80%] p-2 m-2   rounded-md bg-gray-600"
        />
        <button  className="bg-red-600 w-[80%] m-2 px-[75px] py-2 rounded-md">
        {isSignIn? "Sign In": "SignUp"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignIn}>{isSignIn? "New User Sign Up now" :"already registerd Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
