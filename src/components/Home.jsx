import React from "react";
import heroPic from "../assets/picture/hero background image.svg";
import { MdSlowMotionVideo } from "react-icons/md";
import featureImg from "../assets/picture/Featured Image.svg";
import iceland from "../assets/picture/Iceland card image.svg"
import italy from "../assets/picture/Italy card image.svg"
import dubai from "../assets/picture/Dubai card image.svg"
import patagonia from "../assets/picture/Patagonia Card Image.svg"


const Home = () => {
   
     const AdvenCard=[
        {id:1, img:iceland, title:"Iceland", des:"Discover", },
        {id:2, img:italy, title:"Italy", des:"Discover", },
        {id:3, img:dubai, title:"Dubai", des:"Discover", },
        {id:4, img:patagonia, title:"Patagonia", des:"Discover", },
     ];

  return (
    <>
    <section className="pb-10">
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

    </section>

    {/** section 02 */}
    <section className="pb-10">
        <div className="grid grid-cols-2 p-10">
            <div>
                <img src={featureImg} alt="" />
            </div>
            <div className="text-left p-10">
                <h1 className="text-[#8A53FF] uppercase py-4">Featured Destination</h1>
                <h2 style={{ fontFamily: "'Changa One', cursive" }} className="text-4xl font-bold text-[#434343]" >Our swiss adventure blog</h2>
                <p className="text-[#434343] py-4 w-md">
                Visiting the swiss alps? Want to know the requirements on travelling to Switzerland during the pandemic? Our blog might help! 
                </p>
                <div className="flex space-x-2 text-[#8A53FF] cursor-pointer">
                    <MdSlowMotionVideo className="w-8 h-8" />
                    <span className="py-1">Watch Now</span>
                </div>
            </div>

        </div>

    </section>

    {/**sections 03 */}

    <section className="pb-10">
        <div className="px-10 py-4">
            <h1 className="text-[#8A53FF] font-semibold uppercase">join our adventures</h1>
            <h2 style={{ fontFamily: "'Changa One', cursive" }} className="text-4xl font-bold py-4 text-[#434343]">Discover the world with us</h2>

            <div className="grid grid-cols-4 gap-4 py-8">

                {AdvenCard.map((item)=>(
                    <div key={item.id}>
                    <img src={item.img} alt="" className="py-2" />
                    <h1 style={{ fontFamily: "'Changa One', cursive" }} className="text-[#434343] font-bold text-2xl py-1">{item.title}</h1>
                    <h2 className="text-[#8A53FF] text-xs font-semibold">{item.des}</h2>
                </div>

                ))};
                

            </div>

        </div>

    </section>

    </>
  );
};

export default Home;
