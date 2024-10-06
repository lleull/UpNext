import Image from "next/image";
import Link from "next/link";
import { popularDeals } from "../../utils/populardeals";
export default function Home() {
  return (
    <div className="w-full h-full flex bg-slate-400">


      {/* POPULAR EXPERIENCES IN ETHIOPIA */}
      <div className="w-full h-full flex flex-wrap pl-96 pr-96">

        {popularDeals.map((tribe) => {
          return (
            <div className="w-80 ml-4  bg-white mt-5 flex flex-col items-center">
              <Image src={tribe.image} className="w-full h-52 " alt="s" />
              <div className="pl-5 pr-5 pb-10 bg-white mt-5 flex flex-col items-center">

                <h1 className="mt-2">{tribe?.title}</h1>
                <h3 className="mt-2 mb-5">{tribe?.subTitle}</h3>
                <p className="text-sm">{tribe?.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>



  );
}
