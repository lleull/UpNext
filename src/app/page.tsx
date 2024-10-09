"use client"
import Image from "next/image";
import { LatestArticle, popularDeals } from "../../utils/populardeals";
import Corocdile from "./assets/img8.png"
import EthMap from './assets/img1.png'
import { bestDeals } from "./../../utils/bestdeals"
import img from "./assets/nene.jpg"
import img2 from "./assets/eth.jpeg"
import LogoImg from "./assets/prev.png"
import { useEffect, useState } from "react";
import { BiArrowToRight, BiArrowFromBottom, BiArrowToBottom, BiCalendar, BiUserCircle, BiUser } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { TeamMember } from "../../utils/teamMember";
import { Header } from "@/app/Components/Header";
import { BookingUi } from "@/app/Components/Booking";
import HeroSection from "@/app/Components/HeroSection";
import BestDeals from "@/app/Components/BestDeals";

export default function Home() {
  const [moreSelected, setmoreSelected] = useState(true)
  const [newBooking, setnewBooking] = useState(false)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('animateElement');
      if (element) {
        const rect = element.getBoundingClientRect();
        // Check if element is in the viewport
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);  // Element is visible in the viewport
        } else {
          setIsVisible(false); // Element is not visible
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full  items-center flex-col justify-center flex z-1">
      {newBooking ? <BookingUi setnewBooking={setnewBooking} /> : ""}
      <Image src={img} className="w-full h-[100vh] absolute top-0 z-0" alt="s" />
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <Header setnewBooking={setnewBooking} />
      <HeroSection setnewBooking={setnewBooking} />
      {/* BestDEals */}
      <BestDeals />

      {/* WHY ABSOLUTE ETHIOPIA IS THE COMPANY OF CHOICE? */}

      <div className="w-full flex items-center justify-center flex-col">
        <h3 className="text-2xl font-serif text-black font-extrabold pt-10 pb-10 text-left pl-64 w-full border-1 border-red-300">WHY ABSOLUTE ETHIOPIA IS THE COMPANY OF CHOICE?</h3>
        <div id="animateElement" className="w-full h-full  mt-10 pr-80 pl-80 mb-20 flex flex-row items-center gap-20">
          <Image src={Corocdile} alt="corocodile" className={`w-1/2 h-80 ${isVisible ? 'animate-slideleft' : ""}`} />
          <p className="animate-slideright text-lg">Ethiopia is Africa’s second largest country by population and 10th largest by size so there is a lot to know and be aware of.
            We are locally born in Ethiopia and educated here. We know the country, the terrain and the people. Professionally qualified and certified to take charge of Ethiopian tourist expeditions, we promise to take care of you and provide you an experience like no other. Despite Ethiopia being known as a poor country, you will still feel that touch of luxury with our modern, top-quality transportation and accommodation services.</p>
        </div>
      </div>




      {/* Latest Article*/}


      <div className="w-full h-full flex-col flex  items-center justify-center  pl-5 pr-5 pb-20 bg-gradient-to-r mt-52 from-cyan-200 to-green-100">
        <h1 className="text-black text-3xl font-bold mt-24">Team Members</h1>
        <div className="w-full h-full flex-row flex    items-center justify-center  pl-5 pr-5">

          {
            TeamMember?.map((tribe, index) => {
              return (

                <div className="w-80  mt-5 flex flex-col  z-10  shadow-2xl items-center justify-center  pt-10 bg-white rounded-xl ml-1">
                  <Image src={tribe?.image} alt="ii" width={80} height={80} className="flex rounded-full" />
                  <div className="pl-5 pr-5 pb-10 bg-white pt-5 flex flex-col items-center">

                    <h1 className=" text-xl text-center text-black font-bold">{tribe?.name}</h1>
                    <h3 className="mt-2 mb-5 text-gray-500 text-lg ">{tribe?.job}</h3>
                  </div>
                </div>


              )
            })

          }
        </div>
        <div className="w-full h-[30vh] flex flex-col items-center justify-start">
          <div className="flex flex-row justify-center pl-20 pr-20 items-start mt-20 h-full gap-8">

            <div className="text-left w-1/4">
              <h1 className="text-black font-serif font-bold mb-4 text-3xl">About Us</h1>
              <p className="text-md  text-gray-800">We specialize in creating unforgettable experiences across Ethiopia’s top destinations. Explore the rich culture, stunning landscapes, and the hospitality of the Ethiopian people with our tailored tours.</p>
            </div>

            <div className="text-left w-1/4">
              <h1 className="text-black font-serif font-bold mb-4 text-3xl">Our Services</h1>
              <ul className="text-black list-disc ml-4">
                <li className="text-gray-800">City Tours</li>
                <li className="text-gray-800">Historical Expeditions</li>
                <li className="text-gray-800">Wildlife Safaris</li>
                <li className="text-gray-800">Custom Tour Packages</li>
              </ul>
            </div>

            <div className="text-left w-1/4">
              <h1 className="text-black font-serif font-bold mb-4 text-3xl">Testimonials</h1>
              <p className="text-md text-gray-800">"An unforgettable journey! The team took care of every detail. We saw places we never imagined!" - Jane Doe</p>
            </div>

            <div className="text-left w-1/4">
              <h1 className="text-black font-serif font-bold mb-4 text-3xl">Newsletter</h1>
              <p className="text-sm text-black">Stay updated with our latest tours and offers.</p>
              <input placeholder="Your Email" className="pt-2 pl-4 pr-4 pb-2 border-2 rounded-xl w-full" />
              <button className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2">Subscribe</button>
            </div>

          </div>


        </div>
      </div>

    </div >
  );
}
