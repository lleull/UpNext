"use client"
import Image from "next/image";
import { LatestArticle, popularDeals } from "../../utils/populardeals";
import Corocdile from "./assets/img8.png"
import EthMap from './assets/img1.png'
import { bestDeals } from "./../../utils/bestdeals"
import img from "./assets/nene.jpg"
import img2 from "./assets/eth.jpeg"
import LogoImg from "./assets/prev.png"
import { useState } from "react";
import { BiArrowToRight, BiArrowFromBottom, BiArrowToBottom, BiCalendar, BiUserCircle, BiUser } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { TeamMember } from "../../utils/teamMember";
export const Header = () => {
  return (
    <div className="w-full h-48 flex flex-row items-center justify-between pl-64 pr-64 z-100  animate-slideIn">
      <Image width={150} height={150} src={LogoImg} alt="as" />
      <div className="flex flex-row items-center gap-10">
        <h2>Deals</h2>
        <h2>About</h2>
        <h2>Popular</h2>
        <h2>Contact</h2>


      </div>
      <div className="flex flex-row items-center gap-5">

        <button className="animate-slideIn bg-white rounded-2xl pl-10 pt-2 pr-10 pb-2 items-center ">Book Now</button>
        <button className="animate-slideIn bg-black text-white rounded-2xl pl-10 pt-2 pr-10 pb-2 items-center border-white border-2">Contact Now</button>
      </div>

    </div>
  )
}
export default function Home() {
  const [moreSelected, setmoreSelected] = useState(true)
  return (
    <div className="w-full  items-center flex-col justify-center flex ">
      <Image src={img} className="w-full h-[100vh] absolute top-0 z-0" alt="s" />
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <Header />
      <div className="w-full flex-col h-[80vh] flex items-center  text-center ">
        <h1 className="text-7xl text-pretty font-serif  mt-32 animate-slideIn">Travel to Ethiopia  An Amazing <br /> Natural Adventure</h1>
        <p className="z-10 text-white mt-4 text-sm">Discover the best and richest natural and historical country, we will guide you throught bottom to top <br /> where your wanderlust can be transformed into memorable journeys.</p>
        <button className="animate-slideIn bg-green-200 font-bold rounded-2xl pl-10 pt-2 pr-10 pb-2  mt-10 flex flex-row items-center gap-5 hover:bg-black hover:text-white">Explore Now <FaLocationArrow color="orange" className="border-2 p-1 w-7 h-7 rounded-full" />
        </button>


        <div className="flex w-[110vh] flex-row items-center h-54 pt-5 pb-5 rounded-3xl pl-5 pr-5 justify-between z-10  bg-white  gap-10 mt-44">

          <div className="flex flex-row items-center z-50 gap-5">
            <FaLocationArrow color="black" className="border-2 p-1 w-10 h-10 rounded-full" />
            <h4 className="flex flex-col font-light text-gray-700 text-left">
              Destinations
              <h3 className="font-bold text-black">Omo Valley</h3>
            </h4>
            <BiArrowToBottom color="black" className="ml-1  p-1 w-8 h-8 rounded-full" />
          </div>




          <div className="flex flex-row items-center z-50 gap-5">
            <BiCalendar color="black" className="ml-1 border-2  p-1 w-10 h-10 rounded-full" />
            <h4 className="flex flex-col font-light text-gray-700 text-left">
              Date
              <h3 className="font-bold text-black">Aug 17, 2023</h3>
            </h4>
            <BiArrowToBottom color="black" className="ml-1  p-1 w-8 h-8 rounded-full" />
          </div>


          <div className="flex flex-row items-center z-50 gap-5">
            <BiUser color="black" className="border-2 p-1 w-10 h-10 rounded-full" />
            <h4 className="flex flex-col font-light text-gray-700 text-left">
              Money of people
              <h3 className="font-bold text-black">Adults 2</h3>
            </h4>
            <BiArrowToBottom color="black" className="ml-1  p-1 w-8 h-8 rounded-full" />
          </div>

          <button className="animate-slideIn bg-black text-white rounded-2xl pl-10 pt-3 pr-10 pb-3   flex flex-row items-center gap-7">Book Now <BiArrowToRight color="orange" width={50} /></button>

        </div>
      </div>
      {/* BestDEals */}
      <div className="w-full relative mb-52 pt-20 flex items-center justify-center flex-col">

        <h3 className=" z-10 border-black text-4xl font-serif text-black font-extrabold pt-10 pb-10 w-full text-left pl-64">SEE OUR BEST DEALS
        </h3>

        <div className="w-full h-full   flex flex-wrap pl-60 pr-60">
          {
            bestDeals?.map((tribe, index) => {
              return (
                index < 4 ?
                  <div className="w-80 ml-2  mt-5 flex flex-col  z-10  shadow-2xl">
                    <Image src={tribe?.image} alt="ii" className="w-full h-52" />
                    <div className="pl-5 pr-5 pb-10 bg-white pt-5 flex flex-col items-center">

                      <h1 className=" text-xl text-center text-black">{tribe?.title}</h1>
                      <h3 className="mt-2 mb-5 text-black">{tribe?.date}</h3>
                      <p className="text-sm">{tribe?.desc}</p>
                    </div>
                  </div>
                  : ""
              )
            })

          }
        </div>

        <button onClick={() => setmoreSelected(!moreSelected)} className="w-32 h-10 flex items-center justify-center bg-black text-white font-extrabold rounded-xl mt-20 z-10">
          See More
        </button>

      </div>

      {/* WHY ABSOLUTE ETHIOPIA IS THE COMPANY OF CHOICE? */}

      <div className="w-full flex items-center justify-center flex-col">
        <h2 className="text-2xl font-serif text-black font-extrabold pt-10 pb-10 text-left pl-64 w-full border-1 border-red-300">WHY ABSOLUTE ETHIOPIA IS THE COMPANY OF CHOICE?</h2>
        <div className="w-full h-full  mt-10 pr-80 pl-80 mb-20 flex flex-row items-center gap-20">
          <Image src={Corocdile} alt="corocodile" className="w-1/2 h-80 animate-slideleft" />
          <p className="animate-slideright text-lg">Ethiopia is Africa’s second largest country by population and 10th largest by size so there is a lot to know and be aware of.
            We are locally born in Ethiopia and educated here. We know the country, the terrain and the people. Professionally qualified and certified to take charge of Ethiopian tourist expeditions, we promise to take care of you and provide you an experience like no other. Despite Ethiopia being known as a poor country, you will still feel that touch of luxury with our modern, top-quality transportation and accommodation services.</p>
        </div>
      </div>

      <div className="w-full h-full flex-col flex bg-blue-400   items-center justify-center  pl-5 pr-5 pb-20 bg-gradient-to-r ">
        <h1 className="text-black text-3xl font-bold mt-24">Team Members</h1>
        <div className="w-full h-full flex-row flex bg-blue-400   items-center justify-center  pl-5 pr-5">

          {
            TeamMember?.map((tribe, index) => {
              return (

                <div className="w-80  mt-5 flex flex-col  z-10  shadow-2xl items-center justify-center  pt-10 bg-white rounded-xl ml-1">
                  <Image src={tribe?.image} alt="ii" width={50} height={80} className="flex rounded-sm" />
                  <div className="pl-5 pr-5 pb-10 bg-white pt-5 flex flex-col items-center">

                    <h1 className=" text-xl text-center text-black">{tribe?.name}</h1>
                    <h3 className="mt-2 mb-5 text-black">{tribe?.job}</h3>
                  </div>
                </div>


              )
            })

          }
        </div>
      </div>


      {/* Latest Article*/}
      <div className="w-full flex items-center justify-center flex-col">
        <h2 className="border-black text-2xl font-serif text-black font-extrabold pt-10 pb-10 text-left w-full p-64">Articles</h2>


        <div className="w-full h-full flex flex-wrap pl-64 pr-64">

          {LatestArticle.map((tribe) => {
            return (
              <div className="w-80 ml-1 shadow-lg  bg-white mt-5 flex flex-col items-center pl-2 pr-2 ">

                <h3 className="mt-2 mb-5 text-gray-500 text-left w-full ">{tribe?.writtenBy}</h3>
                <p className="text-sm text-gray-800">{tribe?.article}</p>

              </div>
            )
          })}
        </div>


      </div>
    </div >
  );
}
