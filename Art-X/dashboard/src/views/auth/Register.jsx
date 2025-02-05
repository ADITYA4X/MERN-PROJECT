import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../../utils/utils";
import {
  seller_register,
  messageClear,
} from "../../store/Reducers/authReducer";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { loader, successMessage, errorMessage } = useSelector(
    (state) => state.auth
  );

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch(seller_register(state));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/");
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{
        backgroundImage: "url('/images/signin-bg.png.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>

      <div className="relative z-10 w-full flex justify-center items-center">
        <div className=" flex w-full justify-center items-center max-w-6xl bg-black bg-opacity-50 shadow-lg ">
          <div className="w-1/2 bg-black bg-opacity-5 ">
            <div className="flex flex-col px-8">
              <h1 className="text-white text-5xl font-bold mb-32">
                Welcome to{" "}
                <span className="bg-white text-gray-800 px-2"> Art-X</span> !
              </h1>

              <p className="text-gray-300 text-sm mr-8 mb-2 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <button className="w-[95px] h-[35px] mt-8 bg-transparent text-gray-400 rounded-lg font-semibold hover:opacity-90 hover:text-white ml-[-10]">
                Learn More...
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center w-1/2 bg-white bg-opacity-50">
            <div className=" p-6  w-[60%]">
              <h2 className=" font-semibold   text-center mb-4">
                <span className="bg-black text-white text-3xl px-3 py-1">
                  Sign Up
                </span>
              </h2>

              <form onSubmit={submit}>
                <div className="mb-4">
                  <label
                    className="block font-semibold text-black  text-lg mb-2 mx-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    onChange={inputHandle}
                    value={state.name}
                    className="w-full px-4 py-2 rounded-3xl bg-black bg-opacity-60 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black"
                    type="text"
                    name="name"
                    placeholder="Name"
                    id="name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block font-semibold text-black  text-lg mb-2 mx-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    onChange={inputHandle}
                    value={state.email}
                    className="w-full px-4 py-2 rounded-3xl bg-black bg-opacity-60 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black"
                    type="email"
                    name="email"
                    placeholder="Email"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-semibold text-black  text-lg mb-2 mx-2"
                    htmlFor="password"
                  >
                    Password{" "}
                  </label>
                  <input
                    onChange={inputHandle}
                    value={state.password}
                    className="w-full px-4 py-2 rounded-3xl bg-black bg-opacity-60 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black"
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    id="password"
                    required
                  />
                </div>

                <div className="flex items-center w-full gap-3 mb-3">
                  <input
                    className="w-4 h-4 text-gray-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-gray-500"
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                  />
                  <label
                    htmlFor="checkbox"
                    className="flex items-center gap-3 justify-center text-black"
                  >
                    I agree to privacy policy & terms
                  </label>
                </div>

                <button
                  disabled={loader ? true : false}
                  className="w-full px-4 py-2 rounded-3xl bg-black bg-opacity-90 text-white placeholder-gray-500 focus:outline-none focus:bg-white focus:text-black hover:ring-1 hover:ring-stone-700"
                >
                  {loader ? (
                    <PropagateLoader color="#aaa" cssOverride={overrideStyle} />
                  ) : (
                    "Sign Up"
                  )}
                </button>

                <div className="flex items-center mb-3 gap-3 justify-center text-black">
                  <p>
                    Already have an account ?{" "}
                    <Link className="font-bold underline" to="/login">
                      Sign In
                    </Link>
                  </p>
                </div>

                <div className="w-full flex justify-center items-center mb-3 text-black">
                  <div className="w-[45%] bg-black h-[1px]"></div>
                  <div className="w-[10%] flex justify-center items-center">
                    <span className="pb-1 ">OR</span>
                  </div>
                  <div className="w-[45%] bg-black h-[1px]"></div>
                </div>

                <div className="flex justify-center mt-4 space-x-4 ">
                  <div className="text-black text-xl hover:text-orange-600">
                    <span>
                      <FaGoogle />
                    </span>
                  </div>

                  <div className="text-black text-2xl hover:text-blue-600">
                    <span>
                      <FaFacebook />
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
