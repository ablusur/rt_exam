import React from "react";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    // nav section start
    <header className="bg-[green] py-6">
      <div className="max-w-container mx-auto">
        <div className="lg:flex items-center h-full">
          <div className="w-full lg:w-[25%] py-3 lg:py-start">
            <div className="flex items-center gap-x-2 lg:justify-start justify-center">
              <FaRegMessage className="text-white" />
              <h3 className="text-white">mail@yourcompany.com</h3>
            </div>
          </div>
          <div className="w-full lg:w-[25%] py-3">
            <div className="flex items-center gap-x-2 lg:justify-start justify-center">
              <IoMdCall className="text-white" />
              <h3 className="text-white">+896 120 5889 (Toll free)</h3>
            </div>
          </div>
          <div className="w-full lg:w-[50%] py-3">
            <div className="flex lg:justify-end justify-center gap-x-2">
              <FaFacebook className="text-white" />
              <FaTwitter className="text-white" />
              <FaLinkedin className="text-white" />
              <FaInstagram className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
    // nav section end
  );
};

export default Header;
