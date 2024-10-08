import LogoImg from "./../app/assets/prev.png"
import Image from "next/image"
export const Header = ({ setnewBooking }: any) => {
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

                <button onClick={() => setnewBooking(true)} className="animate-slideIn bg-white rounded-2xl pl-10 pt-2 pr-10 pb-2 items-center ">Book Now</button>
                <button className="animate-slideIn bg-black text-white rounded-2xl pl-10 pt-2 pr-10 pb-2 items-center border-white border-2">Contact Now</button>
            </div>

        </div>
    )
}