import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { admin_login } from "../../store/Reducers/authReducer";

const AdminLogin = () => {
  const dispatch = useDispatch();

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
    dispatch(admin_login(state));
    // console.log(state);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-white flex justify-center items-center">
      <div className="flex w-full justify-center items-center max-w-6xl bg-gray-800 bg-opacity-70 rounded-lg shadow-lg py-28 gap-24">
        <div className="flex flex-col justify-center items-start ">
          <div>
            <img
              className="w-60 h-50 ml"
              src="http://localhost:3001/images/logo3.png"
              alt="logo"
            />
          </div>

          <p className="text-gray-300 text-sm mr-8 ml-4 mb-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <button className="text-gray-400 mt-8 bg-transparent px-4  font-semibold hover:opacity-90 hover:text-white ">
            Learn More...
          </button>
        </div>

        <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-md w-[30%]">
          <h2 className="text-white text-2xl font-semibold text-center mb-4">
            Log In
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
