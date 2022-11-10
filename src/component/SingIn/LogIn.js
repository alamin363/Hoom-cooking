import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { contextProvider } from "../Context/AuthContext";
import { FaAlignRight } from "react-icons/fa";
import useTitle from "../Hooks/useTitel";
const LogIn = () => {
  const { logInWithEmailAndPassword, LoginWithGoogle } =
    useContext(contextProvider);
    useTitle("login")
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handelInputFrom = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logInWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success("user Login succes");
          navigate(from, { replace: true });
        }
        console.log(user);
      })
      .catch((err) => toast.error(err.message));
  };
  const handelGoogleLogin = () => {
    LoginWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("Login success", <FaAlignRight />);
        alert("login success");
        if (user) {
          navigate(from, { replace: true })
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="flex justify-center">
      <div className="grid items-center shadow-sm-light bg-gray-600 m-8 w-80 ">
        <form onSubmit={handelInputFrom} className="m-5 ">
          <label
            for="email"
            className="block text-white mb-2 text-sm font-medium dark:text-gray-300"
          >
            Your email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="bg-gray-50 mb-5 text-gray-500 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="input your email"
            required=""
          />
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Input your password"
            name="password"
            className="bg-gray-50  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
          <Link className="underline hover:text-white" to="/register">
            have a don't account{" "}
          </Link>
          <div className="flex justify-center">
            <button
              className="btn  bg-[#4280E6] rounded mt-5 text-white  px-8 py-3 border-x-green-800"
              type="Submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex justify-center">
          <button
            onClick={handelGoogleLogin}
            type="button"
            className="text-white w-52 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 m-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
