import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdImages } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { get_category } from "../../store/Reducers/categoryReducer";
import {
  add_painting,
  messageClear,
} from "../../store/Reducers/paintingReducer";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../../utils/utils";
import toast from "react-hot-toast";

const AddPainting = () => {
  const dispatch = useDispatch();
  const { categorys } = useSelector((state) => state.category);

  const { loader, successMessage, errorMessage } = useSelector(
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
  const imageHandle = (e) => {
    const files = e.target.files;
    const length = files.length;
    if (length > 0) {
      setImages([...images, ...files]);
      let imageUrl = [];
      for (let i = 0; i < length; i++) {
        imageUrl.push({ url: URL.createObjectURL(files[i]) });
      }
      setImageShow([...imageShow, ...imageUrl]);
    }
  };
  // console.log(images)
  // console.log(imageShow)

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      setState({
        name: "",
        description: "",
        discount: "",
        price: "",
        brand: "",
        stock: "",
      });
      setImageShow([]);
      setImages([]);
      setCategory("");
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  const changeImage = (img, index) => {
    if (img) {
      let tempUrl = imageShow;
      let tempImages = images;
      tempImages[index] = img;
      tempUrl[index] = { url: URL.createObjectURL(img) };
      setImageShow([...tempUrl]);
      setImages([...tempImages]);
    }
  };
  console.log(images);

  const removeImage = (i) => {
    const filterImage = images.filter((img, index) => index !== i);
    const filterImageUrl = imageShow.filter((img, index) => index !== i);
    setImages(filterImage);
    setImageShow(filterImageUrl);
  };

  const add = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", state.name);
    formData.append("description", state.description);
    formData.append("price", state.price);
    formData.append("stock", state.stock);
    formData.append("discount", state.discount);
    formData.append("type", state.type);
    formData.append("shopName", "Art-X Gallery");
    formData.append("category", category);

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    // console.log(state);
    dispatch(add_painting(formData));
  };

  useEffect(() => {
    setAllCategory(categorys);
  }, [categorys]);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-white rounded-3xl">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-stone-800 text-xl font-semibold">
            Add Painting :
          </h1>
          <Link
            to="/seller/dashboard/paintings"
            className="bg-stone-600 hover:shadow-stone-600/30 hover:shadow-lg text-white rounded-3xl px-7 py-2 my-2"
          >
            All Painting
          </Link>
        </div>
        <div>
          <form onSubmit={add}>
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
                  placeholder="Product Name"
                />
              </div>
              <div className="flex flex-col w-full gap-1 text-stone-800">
                <label htmlFor="brand">Painting Type</label>
                <input
                  className="px-4 py-2 focus:border-stone-900 outline-none bg-stone-300 border border-stone-300 rounded-xl text-stone-800"
                  onChange={inputHandle}
                  value={state.brand}
                  type="text"
                  name="type"
                  id="type"
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
                    {allCategory.map((c, i) => (
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
                <div className="h-[180px] relative">
                  <label htmlFor={i}>
                    <img
                      className="w-full h-full rounded-sm"
                      src={img.url}
                      alt=""
                    />
                  </label>
                  <input
                    onChange={(e) => changeImage(e.target.files[0], i)}
                    type="file"
                    id={i}
                    className="hidden"
                  />
                  <span
                    onClick={() => removeImage(i)}
                    className="p-2 z-10 cursor-pointer bg-slate-700 hover:shadow-lg hover:shadow-slate-400/50 text-stone-500 absolute top-1 right-1 rounded-full"
                  >
                    <IoMdCloseCircle />
                  </span>
                </div>
              ))}

              <label
                className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed border-stone-400 hover:border-stone-900 w-full text-stone-500"
                htmlFor="image"
              >
                <span>
                  <IoMdImages />
                </span>
                <span>Select Image </span>
              </label>
              <input
                className="hidden"
                onChange={imageHandle}
                multiple
                type="file"
                id="image"
              />
            </div>

            <div className="flex">
              <button
                disabled={loader ? true : false}
                className="bg-stone-600 hover:bg-black  text-white rounded-3xl px-7 py-2 my-2"
              >
                {loader ? (
                  <PropagateLoader color="#aaa" cssOverride={overrideStyle} />
                ) : (
                  "Add Painting"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddPainting;
