import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Login = () => {
  const [state, setState] = useState({
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-white flex justify-center items-center">
      <div className="flex w-full justify-center items-center max-w-6xl bg-gray-800 bg-opacity-70 rounded-lg shadow-lg py-28 gap-24">
        <div className="flex flex-col">
          <h1 className="text-white text-5xl font-bold mb-32">
            Welcome to{" "}
            <span className="bg-white text-gray-800 px-2"> Art-X</span> !
          </h1>

          <p className="text-gray-300 text-sm mr-8 mb-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <button className="w-[135px] h-[35px] mt-8 bg-gradient-to-r from-gray-600 to-black text-gray-400 px-4 rounded-lg font-semibold hover:opacity-90 hover:text-white hover:ring-1 hover:ring-gray-400">
            Learn More
          </button>
        </div>

        <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-md w-[30%]">
          <h2 className="text-white text-2xl font-semibold text-center mb-4">
            Sign In
          </h2>

          <form onSubmit={submit}>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-md mb-2 mx-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={inputHandle}
                value={state.email}
                className="w-full px-4 py-2 rounded-3xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-300 text-md mb-2 mx-2"
                htmlFor="password"
              >
                Password{" "}
              </label>
              <input
                onChange={inputHandle}
                value={state.password}
                className="w-full px-4 py-2 rounded-3xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 mb-8"
                type="password"
                name="password"
                placeholder="••••••••"
                id="password"
                required
              />
            </div>

            <button className="w-full bg-gradient-to-r from-gray-500 to-gray-800 text-white py-2 px-4 rounded-3xl font-semibold hover:opacity-90 hover:text-black hover:ring-2 hover:ring-gray-500 mb-1">
              Submit
            </button>

            <div className="flex items-center mb-3 gap-3 justify-center text-gray-500">
              <p>
                Don't have an account ? <span> </span>
                <Link className="font-bold text-white underline" to="/register">
                  Sign Up
                </Link>
              </p>
            </div>

            <div className="w-full flex justify-center items-center mb-3 text-white">
              <div className="w-[45%] bg-slate-400 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1 ">OR</span>
              </div>
              <div className="w-[45%] bg-slate-400 h-[1px]"></div>
            </div>

            <div className="flex justify-center mt-4 space-x-4 ">
              <div className="text-white hover:text-orange-600">
                <span>
                  <FaGoogle />
                </span>
              </div>

              <div className="text-white hover:text-blue-600">
                <span>
                  <FaFacebook />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
