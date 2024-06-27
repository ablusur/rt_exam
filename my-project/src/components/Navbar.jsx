import React from "react";
import Logo from "../assets/Logo1.png";

const Navbar = () => {
  return (
    // navbar section start
    <nav className="bg-[#000] h-[70px]">
      <div className="max-w-container mx-auto">
        <div className="flex items-center justify-between ">
          <div className="">
            <img src={Logo} alt="" />
          </div>
          <div className="">
            <ul className="flex gap-x-12 ">
              <li className="font-semibold font-poppin text-[16px] text-[#ffff] p-4 hover:text-[#000] transition ease-in-out delay-150">
                HOME
              </li>
              <li className="font-semibold font-poppin text-[16px] text-[#ffff] p-4 hover:text-[#000] transition ease-in-out delay-150">
                ABOUT US
              </li>
              <li className="font-semibold font-poppin text-[16px] text-[#ffff] p-4 hover:text-[#000] transition ease-in-out delay-150">
                SERMON
              </li>
              <li className="font-semibold font-poppin text-[16px] text-[#ffff] p-4 hover:text-[#000] transition ease-in-out delay-150">
                BLOG
              </li>
              <li className="font-semibold font-poppin text-[16px] text-[#000] p-3 bg-[#FFD2A4] hover:text-[#000] transition ease-in-out delay-150 border-white">
                CONTACT US
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    // navbar section end
  );
};

export default Navbar;
