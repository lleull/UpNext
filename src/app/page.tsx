"use client"
import Image from "next/image";
import { LatestArticle, popularDeals } from "../../utils/populardeals";
import Corocdile from "./assets/img8.png"
import EthMap from './assets/img1.png'
import { bestDeals } from "./../../utils/bestdeals"
import img from "./assets/nene.jpg"
export const Header = () => {
  return (
    <div className="w-full h-48 flex flex-row items-center justify-between pl-64 pr-64 z-100  animate-slideIn">
      <h3 className="text-3xl font-serif font-bold">Traveler</h3>
      <div className="flex flex-row items-center gap-10">
        <h2>Deals</h2>
        <h2>About</h2>
        <h2>Popular</h2>
        <h2>Contact</h2>


      </div>
      <h2>Support</h2>
    </div>
  )
}
export default function Home() {
  return (
    <div className="w-full  items-center flex-col justify-center flex ">
      <Image src={img} className="w-full h-[100vh] absolute top-0 z-0" alt="s" />
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <Header />
      <div className="w-full flex-col h-[80vh] flex items-center ">
        <h1 className="text-7xl text-pretty font-extrabold font-sans mt-64 animate-slideIn">Travel to Ethiopia <p className="text-lg text-pretty font-semibold text-center">The richest historical country</p></h1>
      </div>
      {/* BestDEals */}
      <div className="w-full flex items-center justify-center flex-col">

        <h2 className="border-black border-t-2 border-b-2 pt-10 pb-10 mt-7">SEE OUR BEST DEALS
        </h2>

        <div className="w-full h-full   flex flex-wrap pl-60 pr-60">

          {bestDeals.map((tribe) => {
            return (
              <div className="w-80 ml-2 shadow-lg mt-5 flex flex-col items-start justify-start">
                <Image src={tribe?.image} alt="ii" className="w-full h-52" />
                <div className="pl-5 pr-5 pb-10 bg-white mt-5 flex flex-col items-center">

                  <h1 className="mt-2 text-xl text-center">{tribe?.title}</h1>
                  <h3 className="mt-2 mb-5">{tribe?.date}</h3>
                  <p className="text-sm">{tribe?.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>



      {/* AboutEthiopia */}

      <div className="flex items-center w-full pl-64 pr-64 bg-slate-300 justify-center flex-col">
        <div className="border-black w-96 flex justify-center border-t-2 border-b-2 pt-10 pb-10 mt-7">
          <h2>About ETHIOPIA</h2>

        </div>
        <div className="flex items-center  gap-32 justify-between w-full mt-28 mb-28">

          <Image src={EthMap} alt="corocodile" className="" />
          <div className="flex flex-col items-center gap-24">
            <p>Best time to go – mid-October to June (dry season)</p>
            <p>High Season – Between October and January</p>
            <p>Size – 1,104,300 km² (about five times larger than UK)</p>
          </div>

        </div>
        <h2 className="font-bold text-3xl font-serif mb-20">HOME TO 9 UNESCO WORLD HERITAGE SITES</h2>


      </div>

      {/* POPULAR EXPERIENCES IN ETHIOPIA */}
      <div className="border-black border-t-2 border-b-2 pt-10 pb-10 mt-7">
        <h2>POPULAR EXPERIENCES IN ETHIOPIA</h2>
      </div>
      <div className="w-full h-full flex flex-wrap pl-52 pr-52">

        {popularDeals.map((tribe) => {
          return (
            <div className="w-80 ml-4 shadow-lg  bg-white mt-5 flex flex-col items-center">
              <Image src={tribe.image} className="w-full h-52 " alt="s" />
              <div className="pl-5 pr-5 pb-10 bg-white mt-5 flex flex-col items-center">

                <h1 className="mt-2 text-xl text-center">{tribe?.title}</h1>
                <h3 className="mt-2 mb-5">{tribe?.subTitle}</h3>
                <p className="text-sm">{tribe?.desc}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* 
WHY ABSOLUTE ETHIOPIA IS THE COMPANY OF CHOICE? */}
      <div className="w-full flex items-center justify-center flex-col">

        <div className="border-black border-t-2 border-b-2 pt-10 pb-10 mt-7">
          <h2>WHY ABSOLUTE ETHIOPIA IS THE COMPANY OF CHOICE?</h2>
        </div>
        <div className="w-full h-full  mt-32 pr-64 pl-64 mb-20 flex flex-row items-center gap-20">
          <Image src={Corocdile} alt="corocodile" className="w-1/2 h-80" />
          <p>Ethiopia is Africa’s second largest country by population and 10th largest by size so there is a lot to know and be aware of.
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
