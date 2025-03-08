import React from "react";
import heroPic from "../assets/picture/hero background image.svg";
import { MdSlowMotionVideo } from "react-icons/md";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${heroPic})` }}
      ></div>

      <div className="relative grid grid-cols-2">
        
        <div className="flex flex-col pb-30 justify-center text-left">
          <h1 style={{ fontFamily: "'Changa One', cursive" }} className="text-5xl font-bold w-md text-[#434343]">
            <span className="text-[#8A53FF]">Let’s talk</span> about your next trip!
          </h1>
          <p className="text-md w-sm text-[#434343] py-4 mt-6">
            Share your favorite travel destination and we will feature it in our next blog!
          </p>

          <div className="flex space-x-6 mt-6 cursor-pointer">
            <button className="bg-[#8A53FF] px-6 py-3 cursor-pointer text-white rounded-md">
              Share your story
            </button>
            <p className="py-2 flex text-[#434343]">
                <MdSlowMotionVideo  className="w-8 h-8 text-[#8A53FF] bg-gray-300 rounded-full p-1" />
              <span className="px-2 py-1"> Watch highlights </span> 
            </p>
          


          </div>
        </div>

        
        <div></div>
      </div>
    </div>
  );
};

export default Home;
