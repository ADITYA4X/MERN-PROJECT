import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdImages } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

const EditPainting = () => {
  const categorys = [
    {
      id: 1,
      name: "Madhubani",
    },
    {
      id: 2,
      name: "Pattachitra",
    },
    {
      id: 3,
      name: "Kalamkari",
    },
    {
      id: 4,
      name: "Miniature",
    },
    {
      id: 5,
      name: "Mandala",
    },
    {
      id: 6,
      name: "Lepakshi",
    },
    {
      id: 7,
      name: "Thangka",
    },
    {
      id: 8,
      name: "Modern",
    },
    {
      id: 9,
      name: "Minimalist",
    },
  ];
  const [state, setState] = useState({
    name: "",
    description: "",
    discount: "",
    price: "",
    Type: "",
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
  const [allCategory, setAllCategory] = useState(categorys);
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
      name: "Bharni-Shri Krishna",
      description: "Mythological depictions of Hindu gods Krishna.",
      discount: 20,
      price: 4000,
      Type: "Oil Painting",
      stock: 10,
    });
    setCategory("Madhubani");
    setImageShow(["http://localhost:3001/images/category/1.jpg", ,]);
  }, []);

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
          <form>
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
              <button className="bg-stone-600 hover:shadow-stone-600/30 hover:shadow-lg text-white rounded-3xl px-7 py-2 my-2">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditPainting;
