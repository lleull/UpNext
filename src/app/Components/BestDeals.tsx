import Image from 'next/image'
import React from 'react'
import { bestDeals } from '../../../utils/bestdeals'

function BestDeals() {
    return (
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

            <button className="w-32 h-10 flex items-center justify-center bg-black text-white font-extrabold rounded-xl mt-20 z-10">
                See More
            </button>

        </div>
    )
}

export default BestDeals