import React from "react";
import Logo from "../assets/Logo1.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-[100px]">
      <div className=" bg-black py-[50px]">
        <div className="max-w-container mx-auto flex">
          <div className="lg:w-3/12 py-7">
            <div className="">
              <img src={Logo} className="text-black" alt="" />
              <ul>
                <li className="text-white font-poppin text-[12px] pt-3">
                  © Copyright Finsweet 2022
                </li>
                <li className="text-white font-poppin text-[12px] py-5">
                  4806 555-0103
                </li>
                <li className="text-white font-poppin text-[12px]">
                  4517 Washington Ave
                </li>
                <li className="text-white font-poppin text-[12px]">
                  finsweet@example.co
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-3/12 py-7">
            <div className="">
              <ul>
                <li className="text-white font-poppin lg:text-[12px] text-sm pt-3">
                  Quicklinks
                </li>
                <li className="text-white font-poppin lg:text-[12px] text-sm py-2">
                  ABOUT US
                </li>
                <li className="text-white font-poppin lg:text-[12px] text-sm py-2">
                  SERVICES
                </li>
                <li className="text-white font-poppin lg:text-[12px] text-sm py-2">
                  EVENT
                </li>
                <li className="text-white font-poppin lg:text-[12px] text-sm">
                  BLOG
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-3/12 py-7">
            <div className="">
              <ul className="">
                <li className="text-white font-poppin text-[12px] pt-3 pb-7">
                  Connect
                </li>
              </ul>
              <div className="flex gap-x-4">
                {<FaFacebook className="text-white" />}
                {<FaTwitter className="text-white" />}
                {<FaInstagram className="text-white" />}
              </div>
            </div>
          </div>

          <div className="w-4/12 py-7">
            <div className="">
              <div className="">
                <h2 className="text-transform: uppercase text-white font-poppin text-[30px] ">
                  Subscribe to get Latest Updates and News
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
