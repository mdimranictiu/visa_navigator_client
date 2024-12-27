import React from 'react';
import slider01 from '../../assets/img/slider-01.jpg'
import slider02 from '../../assets/img/slider-02.jpg'
import slider03 from '../../assets/img/slider-03.jpg'
import slider04 from '../../assets/img/slider-04.jpeg'


const Header = () => {
  const ImgNotFound= 'Image Not Found'
  return (
    <div>
      <div className="carousel text-center h-[600px] w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={slider01}
            className="w-full opacity-50 "
            alt={ImgNotFound}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className=" text-3xl  font-bold  px-4 py-2 rounded">
              Your Trusted Partner for Stress-Free Visa Applications!
            </h2>
            <br />
            <button class="btn text-white w-[200px] text-[16px] hover:bg-white hover:text-[#72214a] bg-[#72214a]">Apply Now</button>
          
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item  relative w-full">
          <img
            src={slider02}
            className="w-full opacity-50"
            alt={ImgNotFound}
          />
          <div className="absolute inset-0 flex flex-col  items-center justify-center">
            <h2 className=" text-3xl font-bold   px-4 py-2 rounded">
            Discover. Apply. Travel – Your Visa Journey Starts Here!
            </h2>
            <br />
            <button class="btn text-white w-[200px] text-[16px] hover:bg-white hover:text-[#72214a] bg-[#72214a]">Explore More</button>
          
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={slider03}
            className="w-full opacity-50"
            alt={ImgNotFound}
          />
          <div className="absolute inset-0 flex flex-col  items-center justify-center">
            <h2 className=" text-3xl font-bold   px-4 py-2 rounded">
            Start Your Visa Application Today – It's Fast, Easy, and Reliable!            </h2>
          <br />
          <button class="btn text-white w-[200px] text-[16px] hover:bg-white hover:text-[#72214a] bg-[#72214a]">Apply Now</button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
           src={slider04}
           className="w-full opacity-50"
           alt={ImgNotFound}
          />
          <div className="absolute inset-0 flex flex-col  items-center justify-center">
            <h2 className=" text-3xl font-bold  px-4 py-2 rounded">
            Looking to Study, Work, or Travel Abroad? <br /> We’ve Got You Covered!
            </h2>
            <button class="btn text-white w-[200px] text-[16px] hover:bg-white hover:text-[#72214a] bg-[#72214a]">Get Started</button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
