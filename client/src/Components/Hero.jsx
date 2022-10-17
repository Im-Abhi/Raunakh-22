import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs'
// import { Link } from 'react-router-dom';

import qr from '../Assets/gallery/qr.jpeg';
// import razorpayBtn from '../Assets/gallery/RazorpayBtnImage.png';

const Hero = () => {
    return (
        <>
            <section className="py-8 min-h-[75vh]" id='home'>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div className="flex flex-col gap-8 sm:flex-row-reverse sm:w-11/12 sm:mx-auto">
                    {/* <div className="flex flex-col gap-6 sm:flex-1 sm:justify-center md:flex-row md:items-center">
                        <div className="w-max mx-auto text-center">
                            <h1 className="text-5xl font-medium text-[#EAB308] lg:text-7xl">129</h1>
                            <p className="uppercase text-lg lg:text-xl">People Donated</p>
                        </div>
                        <div className="w-max mx-auto text-center">
                            <h1 className="text-5xl font-medium text-[#22C55E] lg:text-7xl">₹ 23973</h1>
                            <p className="uppercase text-lg lg:text-xl">Donation Recieved</p>
                        </div>
                    </div> */}
                    <div className="flex flex-col gap-6 sm:flex-1 sm:justify-center md:gap-8 lg:gap-12">
                        <div className="w-max mx-auto text-center">
                            <a href="https://www.youtube.com/watch?v=asqnjPukYBQ" target="_blank" rel="noopener noreferrer">
                                <span className="h-[50px] flex items-center justify-center gap-2">
                                    <BsFillPlayCircleFill className='text-4xl text-[#EF4444] transition-all duration-300 hover:text-5xl lg:text-6xl lg:hover:text-7xl' />
                                    <p className="w-max border-b lg:text-xl">Watch Event Livestream</p>
                                </span>
                            </a>
                        </div>
                        <div className="w-11/12 max-w-sm mx-auto text-center rounded bg-white py-4 flex flex-col justify-center items-center gap-4 lg:max-w-xl">
                            <h1 className="w-4/5 mx-auto text-2xl uppercase font-semibold text-[#233F4D] lg:text-4xl">Help Us Achive Our Goal</h1>
                            <img src={qr} alt="Donate" className='w-44 md:w-60' />
                            <p className="text-black text-lg font-semibold md:text-xl lg:text-2xl">OR</p>
                            <span className="text-[#233F4D] font-medium md:text-lg lg:text-xl">
                                UPI ID:
                                <p className="border-b border-b-[#233F4D] font-semibold px-1">raunak.maini55@okaxis</p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero