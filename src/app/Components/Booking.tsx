
export const BookingUi = ({ setnewBooking }: any) => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-inherit backdrop-blur-xl absolute  top-0 overflow-hidden z-50 animate-slideIn">
            <div className="flex items-center justify-center p-12 z-10  bg-blue-300 rounded-3xl">

                <div className="mx-auto w-full max-w-[550px]">
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fName"
                                        id="fName"
                                        placeholder="First Name"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lName"
                                        id="lName"
                                        placeholder="Last Name"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <label
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                How many guest are you bringing?
                            </label>
                            <input
                                type="number"
                                name="guest"
                                id="guest"
                                placeholder="5"
                                min="0"
                                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        id="time"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">
                                Are you living outside of Ethiopia
                            </label>
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="radio1"
                                        id="radioButton1"
                                        className="h-5 w-5"
                                    />
                                    <label
                                        className="pl-3 text-base font-medium text-[#07074D]"
                                    >
                                        Yes
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="radio1"
                                        id="radioButton2"
                                        className="h-5 w-5"
                                    />
                                    <label
                                        for="radioButton2"
                                        className="pl-3 text-base font-medium text-[#07074D]"
                                    >
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row items-center justify-center gap-20">
                            <button
                                onClick={() => setnewBooking(false)}

                                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                Submit
                            </button>
                            <button
                                onClick={() => setnewBooking(false)}
                                className="hover:shadow-form rounded-md bg-red-800 py-3 px-8 text-center text-base font-semibold text-black outline-none"
                            >
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}