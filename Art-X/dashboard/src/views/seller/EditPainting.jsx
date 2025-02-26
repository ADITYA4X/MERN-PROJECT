import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { get_category } from "../../store/Reducers/categoryReducer";
import {
  get_painting,
  messageClear,
  update_painting,
} from "../../store/Reducers/paintingReducer";
import { overrideStyle } from "../../utils/utils";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";

const EditPainting = () => {
  const { paintingId } = useParams();
  // console.log(paintingId);
  const dispatch = useDispatch();
  const { categorys } = useSelector((state) => state.category);
  const { painting, loader, successMessage, errorMessage } = useSelector(
    (state) => state.painting
  );

  useEffect(() => {
    dispatch(
      get_category({
        searchValue: "",
        perPage: "",
        page: "",
      })
    );
  }, []);

  useEffect(() => {
    dispatch(get_painting(paintingId));
  }, [paintingId]);

  const [state, setState] = useState({
    name: "",
    description: "",
    discount: "",
    price: "",
    type: "",
    stock: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [cateShow, setCateShow] = useState(false);
  const [category, setCategory] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const categorySearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value) {
      let srcValue = allCategory.filter(
        (c) => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
      setAllCategory(srcValue);
    } else {
      setAllCategory(categorys);
    }
  };

  const [images, setImages] = useState([]);
  const [imageShow, setImageShow] = useState([]);

  const changeImage = (img, files) => {
    if (files.length > 0) {
      console.log(img);
      console.log(files[0]);
    }
  };
  console.log(images);

  useEffect(() => {
    setState({
      name: painting.name,
      description: painting.description,
      discount: painting.discount,
      price: painting.price,
      type: painting.type,
      stock: painting.stock,
    });
    setCategory(painting.category);
    setImageShow(painting.images);
  }, [painting]);

  useEffect(() => {
    if (categorys.length > 0) {
      setAllCategory(categorys);
    }
  });

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  const update = (e) => {
    e.preventDefault();
    const obj = {
      name: state.name,
      description: state.description,
      discount: state.discount,
      price: state.price,
      type: state.type,
      stock: state.stock,
      paintingId: paintingId,
    };
    dispatch(update_painting(obj));
  };

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-white rounded-3xl">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-stone-800 text-xl font-semibold">
            Edit Painting :
          </h1>
          <Link
            to="/seller/dashboard/all-paintings"
            className="bg-stone-600 hover:shadow-stone-600/30 hover:shadow-lg text-white rounded-3xl px-7 py-2 my-2"
          >
            All Painting
          </Link>
        </div>
        <div>
          <form onSubmit={update}>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-stone-800">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="name">Painting Name</label>
                <input
                  className="px-4 py-2 focus:border-stone-900 outline-none bg-stone-300 border border-stone-300 rounded-xl text-stone-800"
                  onChange={inputHandle}
                  value={state.name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Painting Name"
                />
              </div>
              <div className="flex flex-col w-full gap-1 text-stone-800">
                <label htmlFor="Type">Painting Type</label>
                <input
                  className="px-4 py-2 focus:border-stone-900 outline-none bg-stone-300 border border-stone-300 rounded-xl text-stone-800"
                  onChange={inputHandle}
                  value={state.Type}
                  type="text"
                  name="Type"
                  id="Type"
                  placeholder="Oil, WaterColor, Digital..."
                />
              </div>
            </div>

            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-stone-800">
              <div className="flex flex-col w-full gap-1 relative">
                <label htmlFor="category">Painting Category</label>
                <input
                  readOnly
                  onClick={() => setCateShow(!cateShow)}
                  className="px-4 py-2 focus:border-stone-900 outline-none bg-stone-300 border border-stone-300 rounded-xl text-stone-800"
                  onChange={inputHandle}
                  value={category}
                  type="text"
                  id="category"
                  placeholder="--select category--"
                />
                <div
                  className={`absolute top-[101%] bg-stone-500 w-full transition-all rounded-md  ${
                    cateShow ? "scale-100" : "scale-0"
                  } `}
                >
                  <div className="w-full px-4 py-2 fixed">
                    <input
                      value={searchValue}
                      onChange={categorySearch}
                      className="px-3 py-1 w-full focus:border-stone-900  outline-none bg-transparent border border-stone-700 rounded-xl text-stone-800 overflow-hidden"
                      type="text"
                      placeholder="search"
                    />
                  </div>
                  <div className="pt-14"></div>
                  <div className="flex justify-start items-start flex-col h-[200px] overflow-y-scroll">
                    {allCategory.length > 0 &&
                      allCategory.map((c, i) => (
                        <span
                          className={`px-4 py-2 focus:border-stone-900 hover:text-white hover:shadow-lg w-full cursor-pointer ${
                            category === c.name && "bg-stone-500"
                          }`}
                          onClick={() => {
                            setCateShow(false);
                            setCategory(c.name);
                            setSearchValue("");
                            setAllCategory(categorys);
                          }}
                        >
                          {c.name}{" "}
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="stock">Painting Stock</label>
                <input
                  className="px-4 py-2 focus:border-stone-900 outline-none bg-stone-300 border border-stone-300 rounded-xl text-stone-800"
                  onChange={inputHandle}
                  value={state.stock}
                  type="text"
                  name="stock"
                  id="stock"
                  placeholder="Stock"
                />
              </div>
            </div>

            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-stone-800">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="price">Price</label>
                <input
                  className="px-4 py-2 focus:border-stone-900 outline-none bg-stone-300 border border-stone-300 rounded-xl text-stone-800"
                  onChange={inputHandle}
                  value={state.price}
                  type="number"
                  name="price"
                  id="price"
                  placeholder="price"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="discount">Discount</label>
                <input
                  className="px-4 py-2 focus:border-stone-900 outline-none bg-stone-300 border border-stone-300 rounded-xl text-stone-800"
                  onChange={inputHandle}
                  value={state.discount}
                  type="number"
                  name="discount"
                  id="discount"
                  placeholder="discount by %"
                />
              </div>
            </div>

            <div className="flex flex-col w-full gap-1 mb-5">
              <label htmlFor="description" className="text-stone-800">
                Description
              </label>
              <textarea
                className="px-4 py-2 focus:border-stone-900 outline-none bg-stone-300 border border-stone-300 rounded-xl text-stone-800"
                onChange={inputHandle}
                value={state.description}
                name="description"
                id="description"
                placeholder="Description"
                cols="10"
                rows="4"
              ></textarea>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full text-stone-600 mb-4 ">
              {imageShow.map((img, i) => (
                <div>
                  <label htmlFor={i}>
                    <img src={img} alt="" />
                  </label>
                  <input
                    onChange={(e) => changeImage(img, e.target.files)}
                    type="file"
                    id={i}
                    className="hidden"
                  />
                </div>
              ))}
            </div>

            <div className="flex">
              <button
                disabled={loader ? true : false}
                className="bg-stone-600 hover:bg-black  text-white rounded-3xl px-7 py-2 my-2"
              >
                {loader ? (
                  <PropagateLoader color="#aaa" cssOverride={overrideStyle} />
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditPainting;
