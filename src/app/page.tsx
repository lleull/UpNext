"use client"
import Image from "next/image";
import { LatestArticle, popularDeals } from "../../utils/populardeals";
import Corocdile from "./assets/img8.png"
import EthMap from './assets/img1.png'
import { bestDeals } from "./../../utils/bestdeals"
import img from "./assets/nene.jpg"
import LogoImg from "./assets/prev.png"
import { useState } from "react";
import { BiArrowToRight } from "react-icons/bi";
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
      <button className="animate-slideIn bg-white rounded-2xl pl-10 pt-2 pr-10 pb-2 items-center ">Book Now</button>

    </div>
  )
}
export default function Home() {
  const [moreSelected, setmoreSelected] = useState(false)
  return (
    <div className="w-full  items-center flex-col justify-center flex ">
      <Image src={img} className="w-full h-[100vh] absolute top-0 z-0" alt="s" />
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <Header />
      <div className="w-full flex-col h-[80vh] flex items-center  text-center ">
        <h1 className="text-6xl text-pretty font-serif  mt-32 animate-slideIn">Travel to Ethiopia  An Amazing <br /> Natural Adventure</h1>
        <p>Discover the best and richest natural and historical country, we will guide you throught bottom to top</p>
        <button className="animate-slideIn bg-white rounded-xl pl-10 pt-5 pr-10 pb-5 items-center mt-10">Get in Touch</button>


        <div className="flex flex-row items-center h-64 justify-between bg-white w-[50vh]">
          <div>
            <h1>
              Destinations
              <h2>Omo Valley</h2>
            </h1>
          </div>
          <div>

          </div>
          <div>

          </div>

          <button className="animate-slideIn bg-black text-white rounded-2xl pl-10 pt-2 pr-10 pb-2   flex flex-row items-center gap-7">Book Now <BiArrowToRight color="orange" width={50} /></button>

        </div>
      </div>
      {/* BestDEals */}
      <div className="w-full mb-52 mt-20 flex items-center justify-center flex-col">

        <h2 className="border-black text-4xl font-serif text-black font-extrabold pt-10 pb-10">SEE OUR BEST DEALS
        </h2>

        <div className="w-full h-full   flex flex-wrap pl-60 pr-60">
          {moreSelected ?
            bestDeals.map((tribe, index) => {
              return (
                index < 4 ?
                  <div className="w-80 ml-2 shadow-lg mt-5 flex flex-col items-start justify-start">
                    <Image src={tribe?.image} alt="ii" className="w-full h-52" />
                    <div className="pl-5 pr-5 pb-10 bg-white mt-5 flex flex-col items-center">

                      <h1 className="mt-2 text-xl text-center text-black">{tribe?.title}</h1>
                      <h3 className="mt-2 mb-5 text-black">{tribe?.date}</h3>
                      <p className="text-sm">{tribe?.desc}</p>
                    </div>
                  </div>
                  : ""
              )
            })

            :
            bestDeals.map((tribe) => {
              return (
                <div className="w-80 ml-2 shadow-lg mt-5 flex flex-col items-start justify-start animate-slideIn">
                  <Image src={tribe?.image} alt="ii" className="w-full h-52" />
                  <div className="pl-5 pr-5 pb-10 bg-white mt-5 flex flex-col items-center">

                    <h1 className="mt-2 text-xl text-center text-black">{tribe?.title}</h1>
                    <h3 className="mt-2 mb-5 text-black">{tribe?.date}</h3>
                    <p className="text-sm">{tribe?.desc}</p>
                  </div>
                </div>
              )
            })
          }
        </div>

        <button onClick={() => setmoreSelected(!moreSelected)} className="w-32 h-10 flex items-center justify-center bg-red-700 rounded-xl mt-10">
          See More
        </button>

      </div>

      {/* WHY ABSOLUTE ETHIOPIA IS THE COMPANY OF CHOICE? */}

      <div className="w-full flex items-center justify-center flex-col">
        <h2 className="border-black text-2xl font-serif text-black font-extrabold pt-10 pb-10">WHY ABSOLUTE ETHIOPIA IS THE COMPANY OF CHOICE?</h2>
        <div className="w-full h-full  mt-32 pr-80 pl-80 mb-20 flex flex-row items-center gap-20">
          <Image src={Corocdile} alt="corocodile" className="w-1/2 h-80 animate-slideleft" />
          <p className="animate-slideright text-lg">Ethiopia is Africa’s second largest country by population and 10th largest by size so there is a lot to know and be aware of.
            We are locally born in Ethiopia and educated here. We know the country, the terrain and the people. Professionally qualified and certified to take charge of Ethiopian tourist expeditions, we promise to take care of you and provide you an experience like no other. Despite Ethiopia being known as a poor country, you will still feel that touch of luxury with our modern, top-quality transportation and accommodation services.</p>
        </div>
      </div>


      {/* Latest Article*/}
      <div className="w-full flex items-center justify-center flex-col">

        <div className="border-black border-t-2 border-b-2 pt-10 pb-10 mt-7">
          <h2>WHY ABSOLUTE ETHIOPIA IS THE COMPANY OF CHOICE?</h2>
        </div>
        <div className="w-full h-full flex flex-wrap pl-64 pr-64">

          {LatestArticle.map((tribe) => {
            return (
              <div className="w-80 ml-4 shadow-lg  bg-white mt-5 flex flex-col items-center">
                <div className="pl-5 pt-5 pr-5 pb-10 bg-white mt-5 flex flex-col items-start justify-between">

                  <h1 className="mt-2 text-lg text-center">{tribe?.title}</h1>
                  <h3 className="mt-2 mb-5 text-gray-500">{tribe?.writtenBy}</h3>
                  <p className="text-sm text-gray-800">{tribe?.article}</p>
                </div>
              </div>
            )
          })}
        </div>


      </div>
    </div>
  );
}
