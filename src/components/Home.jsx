import React from "react";
import heroPic from "../assets/picture/hero background image.svg";
import { MdSlowMotionVideo } from "react-icons/md";
import featureImg from "../assets/picture/Featured Image.svg";
import iceland from "../assets/picture/Iceland card image.svg"
import italy from "../assets/picture/Italy card image.svg"
import dubai from "../assets/picture/Dubai card image.svg"
import patagonia from "../assets/picture/Patagonia Card Image.svg"
import travelHero from "../assets/picture/travels background image.svg"
import Norway from "../assets/picture/Norway.svg"
import KyotoJapan from "../assets/picture/Kyoto-japan.svg"
import TuscanyItaly from "../assets/picture/Tuscany-Italy.svg"
import ZermattSwitzerland from "../assets/picture/Zermatt-Switzerland.svg"



const Home = () => {
   
     const AdvenCard=[
        {id:1, img:iceland, title:"Iceland", des:"Discover", },
        {id:2, img:italy, title:"Italy", des:"Discover", },
        {id:3, img:dubai, title:"Dubai", des:"Discover", },
        {id:4, img:patagonia, title:"Patagonia", des:"Discover", },
     ];

  
const RecentStoryCard= [
  {id:1, image:TuscanyItaly,
    title:"Tuscany,Italy",
    des:"The amazing Tuscany is home to famous Renaissance art and architecture and a vast scenic landscape. view full blog..."
  },
  {id:2, image:KyotoJapan,
    title:"Tuscany,Italy",
    des:"Kyoto is well known for its temples, gardens, Shinto shrines and wooden houses. It's time to visit tokyo. view full blog..."
  },
  {id:3, image:Norway,
    title:"Lofoten Islands,Norway",
    des:"Featuring razor-sharp peaks housing the arctic landscape. This astonishing island is perfect for your next postcard.  view full blog..."
  },
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
              <h1
                style={{ fontFamily: "'Changa One', cursive" }}
                className="text-5xl font-bold w-md text-[#434343]"
              >
                <span className="text-[#8A53FF]">Let’s talk</span> about your
                next trip!
              </h1>
              <p className="text-md w-sm text-[#434343] py-4 mt-6">
                Share your favorite travel destination and we will feature it in
                our next blog!
              </p>

              <div className="flex space-x-6 mt-6 cursor-pointer">
                <button className="bg-[#8A53FF] px-6 py-3 cursor-pointer text-white rounded-md">
                  Share your story
                </button>
                <p className="py-2 flex text-[#434343]">
                  <MdSlowMotionVideo className="w-8 h-8 text-[#8A53FF] bg-gray-300 rounded-full p-1" />
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
            <h1 className="text-[#8A53FF] uppercase py-4">
              Featured Destination
            </h1>
            <h2
              style={{ fontFamily: "'Changa One', cursive" }}
              className="text-4xl font-bold text-[#434343]"
            >
              Our swiss adventure blog
            </h2>
            <p className="text-[#434343] py-4 w-md">
              Visiting the swiss alps? Want to know the requirements on
              travelling to Switzerland during the pandemic? Our blog might
              help!
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
          <h1 className="text-[#8A53FF] font-semibold uppercase">
            join our adventures
          </h1>
          <h2
            style={{ fontFamily: "'Changa One', cursive" }}
            className="text-4xl font-bold py-4 text-[#434343]"
          >
            Discover the world with us
          </h2>

          <div className="grid grid-cols-4 gap-4 py-8">
            {AdvenCard.map((item) => (
              <div key={item.id}>
                <img src={item.img} alt="" className="py-2" />
                <h1
                  style={{ fontFamily: "'Changa One', cursive" }}
                  className="text-[#434343] font-bold text-2xl py-1"
                >
                  {item.title}
                </h1>
                <h2 className="text-[#8A53FF] text-xs font-semibold">
                  {item.des}
                </h2>
              </div>
            ))}
            ;
          </div>
        </div>
      </section>

      {/** section 04 */}

      <section className="pb-10">
        <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
          <div
            className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${travelHero})` }}
          ></div>

          <div className="relative px-4 py-2">
            <div className="py-10">
              <h1 className="text-[#8A53FF]  uppercase text-sm font-semibold">
                Let’s build a community
              </h1>
              <h2
                style={{ fontFamily: "'Changa One', cursive" }}
                className="text-[#434343] text-4xl font-bold py-2"
              >
                Join our next destination
              </h2>
            </div>

            <div className="bg-[#FFFFFF] rounded-md w-xl py-6 px-8 text-left">
              <form action="">
                <h1
                  style={{ fontFamily: "'Changa One', cursive" }}
                  className=" text-2xl font-bold"
                >
                  Share your travels
                </h1>
                <p className="text-[#576074] py-5">
                  Suggest a new travel destination that you want to see and we
                  will feature in our blog
                </p>

                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    className=" block w-lg py-1 px-3 rounded-md text-base border-2 border-gray-300
             text-gray-900 placeholder:text-gray-500
             focus:outline-none sm:text-sm/6"
                    placeholder="Destination name"
                  />

                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    className="block w-lg py-1 px-3 rounded-md text-base border-2 border-gray-300
              text-gray-500 
             focus:outline-none sm:text-sm/6"
                  >
                    <option hidden value="">
                      Country of Destination
                    </option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>

                  <input
                    type="text"
                    name="username"
                    id="username"
                    className=" block w-lg py-1 px-3 rounded-md text-base border-2 border-gray-300
             text-gray-900 placeholder:text-gray-500 
             focus:outline-none sm:text-sm/6"
                    placeholder="Your Name"
                  />

                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    className="block w-lg py-1 px-3 rounded-md text-base border-2 border-gray-300
              text-gray-500 
             focus:outline-none sm:text-sm/6"
                  >
                    <option hidden value="">
                      Shooting category
                    </option>
                    <option>Fashion</option>
                    <option>Abcd</option>
                    <option>Efgh</option>
                  </select>

                  <textarea
                    name=""
                    id=""
                    className=" lock w-lg py-1 px-3 rounded-md text-base border-2
             border-gray-300 text-gray-900 placeholder:text-gray-500 
             focus:outline-none sm:text-sm/6"
                    placeholder="Describe what kind of photos you want to focus on"
                  ></textarea>
                </div>
                <div className="py-2">
                  <button className="text-white bg-[#8A53FF] text-sm rounded-md px-10 py-2">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/** section 05 */}

      <section className="pb-10">
        <div className="px-10 pt-10">
          <span className="text-sm text-[#8A53FF] uppercase font-semibold">
            catch up to our posts
          </span>
          <h1
            style={{ fontFamily: "'Changa One', cursive" }}
            className=" text-4xl py-2 text-[#434343] font-bold"
          >
            Recent story entries
          </h1>

          <div className="grid grid-cols-2 gap-4 px-10 py-6">
            <div>
              <img src={ZermattSwitzerland} alt="" className="rounded-md" />
              <div className="flex text-left py-3">
                <div className="space-y-2 px-4">
                  <h1 className="text-[#434343] font-bold text-md changa-font">
                    Zermatt,Switzerland
                  </h1>
                  <p className="text-[#576074]">
                    Marvel on the beauty of the iconic Matterhorn. Find the best
                    places to stay that has the best views of this peak...
                  </p>
                </div>
                <div className="py-10 pr-6">
                  <MdSlowMotionVideo className="text-[#8A53FF] w-8 h-8" />
                </div>
              </div>
            </div>

            <div className="flex ">
              <div className="">
                {RecentStoryCard.map((item) => (
                  <div key={item.id}
                    className="bg-[#F9F9F9] py-4 rounded-md w-full h-fit flex"
                  >
                    <div className="px-2">
                      <img src={item.image} alt=""
                        className="rounded-md w-100 h-fit" />
                    </div>
                    <div className="text-left px-2">
                      <h1 className="changa-font text-[#434343] text-2xl font-bold">
                        {item.title}
                      </h1>
                      <p className="text-[#576074]">{item.des}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
