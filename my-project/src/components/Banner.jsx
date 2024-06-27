import React from "react";
import BanImage from "../assets/ban1.jpg";

const Banner = () => {
  return (
    <div style={{ backgroundImage: `url(${BanImage})` }} className="py-[200px]">
      <div className="max-w-container mx-auto">
        <h3 className="font-semibold font-poppin text-white text-[16px] py-4 px-10 text-sm">
          WELCOMR TO OUR CHURCH
        </h3>
        <h2 className="font-bold font-poppin text-white md:text-[64px] text-[24px] pl-10 pb-6">
          Become a part of our community
        </h2>
        <button className="font-semibold font-poppin text-white md:text-[16px] text-sm">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default Banner;
