import React from 'react'
import img from "../assets/image.png"
import Image from 'next/image'
const layout = ({ children }: any) => {
    return (
        <div className='w-full flex-col h-screen bg-black flex items-center justify-start'>
            <div className='h-26 pt-10 pl-10 pr-10 bg-white w-full justify-between flex flex-row items-center '>
                <div>

                    <Image src={img} alt='img' width={40} className='rounded-full' />
                    <p className='text-black font-bold text-2xl'>leul11</p>
                </div>
                <ul className='flex w-1/2 flex-row items-center pr-36 pl-36 justify-between'>
                    <li className='text-blue-800 font-semibold text-2xl hover:text-red-950 cursor-pointer'>Home</li>
                    <li className='text-blue-800 font-semibold text-2xl'>Story</li>
                    <li className='text-blue-800 font-semibold text-2xl'>Contact</li>
                    <li className='text-blue-800 font-semibold text-2xl'>Account</li>



                </ul>
                <Image src={img} alt='img' width={50} className='rounded-full' />


            </div>
            {children}
        </div>
    )
}

export default layout