import React, { useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Categorys from "../components/Categorys";
import FeaturePaintings from "../components/paintings/FeaturePaintings";
import Paintings from "../components/paintings/Paintings";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { get_category, get_paintings } from "../store/reducers/homeReducer";

const Home = () => {
  const dispatch = useDispatch();
  const {
    categorys,
    paintings,
    latest_painting,
    topRated_painting,
    discount_painting,
  } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(get_category());
    dispatch(get_paintings());
  }, []);

  return (
    <div className="w-full">
      <Header categorys={categorys} />
      <Banner />
      <Categorys categorys={categorys} />
      <div className="py-[45px]">
        <FeaturePaintings paintings={paintings} />
      </div>
      <div className="py-10">
        <div className="w-[85%] flex flex-wrap mx-auto">
          <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7">
            <div className="overflow-hidden">
              <Paintings title="Latest Paintings" paintings={latest_painting} />
            </div>

            <div className="overflow-hidden">
              <Paintings
                title="Top Rated Paintings"
                paintings={topRated_painting}
              />
            </div>

            <div className="overflow-hidden">
              <Paintings
                title="Discount Paintings"
                paintings={discount_painting}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
