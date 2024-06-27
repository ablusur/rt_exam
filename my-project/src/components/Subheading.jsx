import React from "react";
import Sicon1 from "../assets/Icon1.png";
import Sicon2 from "../assets/Icon2.png";
import Sicon3 from "../assets/Icon3.png";

const Subheading = () => {
  return (
    <div>
      <div className="py-[50px]">
        <div className="max-w-container mx-auto">
          <h5 className="font-bold font-poppin text-black text-[14px] text-center">
            SUB-HEADING
          </h5>
          <h2 className="font-bold font-poppin text-black md:text-[50px] text-[30px] text-center py-6 pb-10">
            A CHURCH THAT RELAVENT
          </h2>
          <div className="flex gap-x-4">
            <div className="lg:w-4/12 ">
              <div className="max-w-container mx-auto bg-[#FFF5EB] p-10">
                <img src={Sicon1} className="p-4" alt="" />
                <h2 className="text-black text-[16px] font-poppin p-4">
                  ABOUT US
                </h2>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="lg:w-4/12 ">
              <div className="max-w-container mx-auto bg-[#FFF5EB] p-10">
                <img src={Sicon2} className="p-4" alt="" />
                <h2 className="text-black text-[16px] font-poppin p-4">
                  GET INVOLVE
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="lg:w-4/12 ">
              <div className="max-w-container mx-auto bg-[#FFF5EB] p-10">
                <img src={Sicon3} className="p-4" alt="" />
                <h2 className="text-black text-[16px] font-poppin p-4">
                  GIVING BACK
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subheading;
