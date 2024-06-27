import React from "react";
import slideImage1 from "../assets/Item1.png";
import slideImage2 from "../assets/Item2.png";
import slideImage3 from "../assets/Item3.png";
import slideImage4 from "../assets/Item4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Service = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-[100px]">
      <div className="">
        <h5 className="font-bold font-poppin text-black text-[14px] text-center">
          WATCH AND LISTEN
        </h5>
        <h2 className="text-black text-[40px] font-poppin py-7 text-center font-semibold">
          THE BENEFITS OF <br /> JOINING OUR CHANCH
        </h2>
      </div>
      ;
      {/* <div className="max-w-container mx-auto">
        <div className="md:before:flex items-center text-center px-3">
          <div className="md:w-5/12">
            <h2 className="md:leading-[70px] w-full font-poppin font-bold text-2xl md:text-[48px] text-black md:w-[390px]">
              The biggest supplier on the country
            </h2>
          </div>
          <div className="md:w-7/12">
            <p className="font-poppin font-semibold text-sm pt-6 md:text-base text-[#6C6C6C] md:w-[600px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </p>
          </div>
        </div>
      </div> */}
      {/* Slider section start */}
      <Slider {...settings}>
        <div className="px-4">
          <img src={slideImage1} alt="" />
        </div>
        <div className="px-4">
          <img src={slideImage2} alt="" />
        </div>
        <div className="px-4">
          <img src={slideImage3} alt="" />
        </div>
        <div className="px-4">
          <img src={slideImage4} alt="" />
        </div>
        <div className="px-4">
          <img src={slideImage3} alt="" />
        </div>
      </Slider>
      {/* <div className="flex">
                
                
                
                
        </div> */}
      {/* Slider section end */}
    </div>
  );
};

export default Service;
