import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Categorys from "../components/Categorys";
import FeaturePaintings from "../components/paintings/FeaturePaintings";
import Paintings from "../components/paintings/Paintings";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Banner />
      <Categorys />
      <div className="py-[45px]">
        <FeaturePaintings />
      </div>
      <div className="py-10">
        <div className="w-[85%] flex flex-wrap mx-auto">
          <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7">
            <div className="overflow-hidden">
              <Paintings title="Latest Paintings" />
            </div>

            <div className="overflow-hidden">
              <Paintings title="Top Rated Paintings" />
            </div>

            <div className="overflow-hidden">
              <Paintings title="Discount Paintings" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
