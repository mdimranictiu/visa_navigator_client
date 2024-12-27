import React from "react";
import passportImg from "../../assets/img/passport.png";
import globalImg from "../../assets/img/global.png";
import graduateImg from "../../assets/img/graduate.png";
import studentImg from "../../assets/img/student.png";
import CountUp from "react-countup";

const CustomerReview = () => {
  return (
    <>
      <div className="my-10 px-5">
        <div>
          <h2 className="text-3xl py-10 font-bold text-center my-5 text-[#72214a]">
            WHY CHOOSE US
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1 ">
          <div className="card card-compact  shadow-xl bg-[#e4dede] items-center py-5">
            <div className="text-center ">
              <img src={studentImg} alt="Img" className="w-[100px] h-[100px]" />
            </div>
            <div className="card-body">
              <h2 className="card-title font-bold text-4xl text-[#72214a]">
              <CountUp end={560} duration={2.5} />+
              </h2>
              <h3 className="text-2xl font-bold text-[#72214a]">Students</h3>
            </div>
          </div>
          <div className="card card-compact  shadow-xl bg-[#e4dede] items-center py-5">
            <div className="text-center ">
              <img
                src={graduateImg}
                alt="Img"
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title font-bold text-4xl text-[#72214a]">
              <CountUp end={320} duration={2.5} />+
              </h2>
              <h3 className="text-2xl font-bold text-[#72214a]">
                Universities
              </h3>
            </div>
          </div>
          <div className="card card-compact shadow-xl bg-[#e4dede] items-center py-5">
            <div className="text-center  ">
              <img
                src={passportImg}
                alt="Img"
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title font-bold text-4xl text-[#72214a]">
              <CountUp end={420} duration={2.5} />+
              </h2>
              <h3 className="text-2xl font-bold text-[#72214a]">Immigration</h3>
            </div>
          </div>
          <div className="card card-compact shadow-xl bg-[#e4dede] items-center py-5">
            <div className="text-center  ">
              <img src={globalImg} alt="Img" className="w-[100px] h-[100px]" />
            </div>
            <div className="card-body">
              <h2 className="card-title font-bold text-4xl text-[#72214a]">
              <CountUp end={120} duration={2.5} />+
              </h2>
              <h3 className="text-2xl font-bold text-[#72214a]">Country</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
