import React from 'react'
import { LatestArticle } from '../../utils/populardeals'

function Articles() {
    return (
        <div className="w-full flex items-center justify-center flex-col">
            <h3 className="border-black text-2xl font-serif text-black font-extrabold pt-10 pb-10 text-left w-full p-64">Articles</h3>


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
    )
}

export default Articles