import React, { useEffect, useState } from "react";
import { FaImages } from "react-icons/fa6";
import { MdEditSquare } from "react-icons/md";
import { FadeLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import {
  messageClear,
  profile_image_upload,
  profile_info_add,
} from "../../store/Reducers/authReducer";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../../utils/utils";

import toast from "react-hot-toast";

const Profile = () => {
  const [state, setState] = useState({
    state: "",
    district: "",
    shopName: "",
    city: "",
    pincode: "",
    mobNum: "",
  });

  const dispatch = useDispatch();
  const { userInfo, loader, successMessage } = useSelector(
    (state) => state.auth
  );

  // const image = true;
  // const loader = true;
  const status = "active";

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      messageClear();
    }
  }, [successMessage]);

  const add_image = (e) => {
    if (e.target.files.length > 0) {
      // console.log(e.target.files[0]);
      const formData = new FormData();
      formData.append("image", e.target.files[0]);

      dispatch(profile_image_upload(formData));
    }
  };

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const add = (e) => {
    e.preventDefault();
    dispatch(profile_info_add(state));
  };

  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-6/12">
          <div className="w-full p-2 bg-stone-400 rounded-3xl text-black">
            <div className="flex justify-center items-center py-3">
              {userInfo?.image ? (
                <label
                  htmlFor="img"
                  className="h-[165px] w-[180px] relative p-3 cursor-pointer  overflow-hidden"
                >
                  <img
                    src={userInfo.image}
                    alt=""
                    className="h-[150px] w-[180px] rounded-3xl"
                  />

                  {loader && (
                    <div className="bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20 rounded-3xl">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              ) : (
                <label
                  className="flex justify-center items-center flex-col h-[150px] w-[200px] cursor-pointer rounded-3xl border border-dashed hover:border-stone-300 border-stone-700 relative"
                  htmlFor="img"
                >
                  <span>
                    <FaImages />{" "}
                  </span>
                  <span>Select Image</span>
                  {loader && (
                    <div className="bg-stone-200 absolute left-0 top-0 w-full h-full opacity-70 flex rounded-3xl justify-center items-center z-20">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              )}

              <input
                onChange={add_image}
                type="file"
                className="hidden"
                id="img"
              />
            </div>

            <div className="px-0 md:px-5 py-2">
              <div className="flex justify-between text-sm font-semibold flex-col gap-2 p-4 bg-stone-200 rounded-3xl relative">
                <span className="p-[6px] bg-stone-900 hover:shadow-lg rounded-xl  hover:shadow-stone-500/50 absolute right-2 top-2 cursor-pointer">
                  <MdEditSquare className="text-stone-300" />{" "}
                </span>
                <div className="flex gap-2">
                  <span>Name : </span>
                  <span>{userInfo.name}</span>
                </div>
                <div className="flex gap-2">
                  <span>Email : </span>
                  <span>{userInfo.email}</span>
                </div>
                <div className="flex gap-2">
                  <span>Role : </span>
                  <span>{userInfo.role}</span>
                </div>
                <div className="flex gap-2">
                  <span>Status : </span>
                  <span>{userInfo.status}</span>
                </div>
                <div className="flex gap-2">
                  <span>Payment Account : </span>
                  <p>
                    {status === "active" ? (
                      <span className="bg-stone-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-1 pb-1.5 rounded-3xl">
                        {userInfo.payment}
                      </span>
                    ) : (
                      <span className="bg-green-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-1 pb-1.5 rounded-3xl">
                        Click Active
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-0 md:px-5 pb-2 ">
              {!userInfo?.shopInfo ? (
                <form onSubmit={add} className="pt-6">
                  <div className="flex flex-col w-full gap-1 mb-2 ">
                    <label
                      htmlFor="Art-Gallery-Name"
                      className="font-semibold text-black"
                    >
                      Art Gallery Name :
                    </label>
                    <input
                      value={state.shopName}
                      onChange={inputHandle}
                      className="px-4 py-2 focus:border-stone-300 outline-none bg-stone-200 border border-stone-900 rounded-xl text-black"
                      type="text"
                      name="shopName"
                      id="Art-Gallery-Name"
                      placeholder="Art Gallery Name"
                    />
                  </div>

                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="state" className="font-semibold text-black">
                      State Name :
                    </label>
                    <input
                      value={state.state}
                      onChange={inputHandle}
                      className="px-4 py-2 focus:border-stone-300 outline-none bg-stone-200 border border-stone-900 rounded-xl text-black"
                      type="text"
                      name="state"
                      id="state"
                      placeholder="State Name"
                    />
                  </div>

                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label
                      htmlFor="district"
                      className="font-semibold text-black"
                    >
                      District Name :
                    </label>
                    <input
                      value={state.district}
                      onChange={inputHandle}
                      className="px-4 py-2 focus:border-stone-300 outline-none bg-stone-200 border border-stone-900 rounded-xl text-black"
                      type="text"
                      name="district"
                      id="district"
                      placeholder="District Name"
                    />
                  </div>

                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="city" className="font-semibold text-black">
                      City Name :
                    </label>
                    <input
                      value={state.city}
                      onChange={inputHandle}
                      className="px-4 py-2 focus:border-stone-300 outline-none bg-stone-200 border border-stone-900 rounded-xl text-black"
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City Name"
                    />
                  </div>

                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label
                      htmlFor="pincode"
                      className="font-semibold text-black"
                    >
                      Pincode :
                    </label>
                    <input
                      value={state.pincode}
                      onChange={inputHandle}
                      className="px-4 py-2 focus:border-stone-300 outline-none bg-stone-200 border border-stone-900 rounded-xl text-black"
                      type="text"
                      name="pincode"
                      id="pincode"
                      placeholder="Pincode"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label
                      htmlFor="mobNum"
                      className="font-semibold text-black"
                    >
                      Contact Number :
                    </label>
                    <input
                      value={state.mobNum}
                      onChange={inputHandle}
                      className="px-4 py-2 focus:border-stone-300 outline-none bg-stone-200 border border-stone-900 rounded-xl text-black"
                      type="text"
                      name="mobNum"
                      id="mobNum"
                      placeholder="Contact Number"
                    />
                  </div>

                  <button
                    disabled={loader ? true : false}
                    className="bg-stone-700  hover:bg-black hover:text-white text-stone-300 rounded-3xl px-7 py-2 my-2 mt-4"
                  >
                    {loader ? (
                      <PropagateLoader
                        color="#aaa"
                        cssOverride={overrideStyle}
                      />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </form>
              ) : (
                <div className="flex justify-between text-sm font-semibold flex-col gap-2 p-4 bg-stone-200 rounded-3xl relative mt-2">
                  <span className="p-[6px] bg-stone-900 hover:shadow-lg rounded-xl  hover:shadow-stone-500/50 absolute right-2 top-2 cursor-pointer">
                    <MdEditSquare className="text-stone-300" />{" "}
                  </span>
                  <div className="flex gap-2">
                    <span>Art Gallery Name : </span>
                    <span>{userInfo.shopInfo?.shopName}</span>
                  </div>
                  <div className="flex gap-2">
                    <span>State : </span>
                    <span>{userInfo.shopInfo?.state}</span>
                  </div>
                  <div className="flex gap-2">
                    <span>District : </span>
                    <span>{userInfo.shopInfo?.district}</span>
                  </div>
                  <div className="flex gap-2">
                    <span>City : </span>
                    <span>{userInfo.shopInfo?.city}</span>
                  </div>
                  <div className="flex gap-2">
                    <span>PinCode : </span>
                    <span>{userInfo.shopInfo?.pincode}</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Mobile No. : </span>
                    <span>{userInfo.shopInfo?.mobNum}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full md:w-6/12">
          <div className="w-full pl-0 md:pl-7 mt-6 md:mt-0">
            <div className=" bg-stone-400 rounded-3xl text-black p-4">
              <h1 className="text-stone-800 text-xl mb-3">Change Password</h1>
              <form>
                <div className="flex flex-col w-full gap-1 mb-2">
                  <label htmlFor="email">Email</label>
                  <input
                    className="px-4 py-2 focus:border-stone-300 outline-none bg-stone-200 border border-stone-900 rounded-xl text-black"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                  />
                </div>
                <div className="flex flex-col w-full gap-1 mb-2">
                  <label htmlFor="o_password">Old Password</label>
                  <input
                    className="px-4 py-2 focus:border-stone-300 outline-none bg-stone-200 border border-stone-900 rounded-xl text-black"
                    type="password"
                    name="old_password"
                    id="o_password"
                    placeholder="Old Password"
                  />
                </div>
                <div className="flex flex-col w-full gap-1 mb-2">
                  <label htmlFor="n_password">New Password</label>
                  <input
                    className="px-4 py-2 focus:border-stone-300 outline-none bg-stone-200 border border-stone-900 rounded-xl text-black"
                    type="password"
                    name="new_password"
                    id="n_password"
                    placeholder="New Password"
                  />
                </div>

                <button className="bg-stone-700  hover:bg-black hover:text-white text-stone-300 rounded-3xl px-7 py-2 my-2 mt-4">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
