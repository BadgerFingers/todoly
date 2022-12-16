import { useState, useEffect } from "react";
import logo from "../../img/logo-white.svg";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Loader from "../Loader/Loader";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [storageToken, setStorageToken] = useState(null);
  const [isSignup, setIsSignup] = useState(false);

  const loginPreflight = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("token", "00000");
      setStorageToken(localStorage.getItem("token"));
    }, 2000);
  };

  const signupPreflight = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSignup(false);
    }, 2000);
  };

  const signupToggleHandler = () => {
    setIsSignup(!isSignup);
  };

  useEffect(() => {
    if (storageToken) {
      window.open("/", "_self");
    }
  }, [storageToken]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col p-8 rounded-lg bg-slate-700 w-[80%] md:w-[50vw] lg:w-[40vw] max-w-[400px]">
        <img src={logo} alt="Chippin Logo" className="w-[100px] mx-auto" />

        {!isSignup && (
          <>
            <form className="flex flex-col mt-8">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input type="email" name="email" id="email" className="input" />
              <label htmlFor="password" className="text-sm mt-4">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="input w-full"
                />
                {showPassword ? (
                  <MdVisibilityOff
                    className="absolute top-3 right-2 text-slate-700 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <MdVisibility
                    className="absolute top-3 right-2 text-slate-700 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
              <button
                className="btn btn-info mt-8 flex justify-center relative"
                onClick={(e) => loginPreflight(e)}
              >
                {isloading ? <Loader w="25" /> : "Login"}
              </button>
            </form>
            <p className="text-sm mt-4 text-center cursor-pointer">
              I dont have an account,{" "}
              <span
                className="text-white transition-colors hover:text-yellow-500"
                onClick={() => signupToggleHandler()}
              >
                Sign me up!
              </span>
            </p>
          </>
        )}

        {isSignup && (
          <>
            <form className="flex flex-col mt-8">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input type="text" name="name" id="name" className="input" />

              <label htmlFor="email" className="text-sm mt-4">
                Email
              </label>
              <input type="email" name="email" id="email" className="input" />

              <label htmlFor="password" className="text-sm mt-4">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="input w-full"
                />
                {showPassword ? (
                  <MdVisibilityOff
                    className="absolute top-3 right-2 text-slate-700 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <MdVisibility
                    className="absolute top-3 right-2 text-slate-700 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
              <button
                className="btn btn-info mt-8 flex justify-center relative"
                onClick={(e) => signupPreflight(e)}
              >
                {isloading ? <Loader w="25" /> : "Sign me up!"}
              </button>
            </form>
            <p className="text-sm mt-4 text-center cursor-pointer">
              Take me back to,{" "}
              <span
                className="text-white transition-colors hover:text-yellow-500"
                onClick={() => signupToggleHandler()}
              >
                Login.
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
