import React from 'react'
import { BiArrowToBottom, BiArrowToRight, BiCalendar, BiUser } from 'react-icons/bi'
import { FaLocationArrow } from 'react-icons/fa'

function HeroSection({ setnewBooking }: any) {
    return (
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

                <button onClick={() => setnewBooking(true)}
                    className="animate-slideIn bg-black text-white rounded-2xl pl-10 pt-3 pr-10 pb-3   flex flex-row items-center gap-7">Book Now <BiArrowToRight color="orange" width={50} /></button>

            </div>
        </div>
    )
}

export default HeroSection