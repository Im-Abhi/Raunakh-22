import React from "react";
import { FcIdea } from 'react-icons/fc';
import { AiFillHeart } from 'react-icons/ai';
import { BiDonateHeart } from 'react-icons/bi';

const About = () => {
    return (
        <>
            <div className="about__container p-4 py-28" id="about">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div className="about_heading text-center pb-20 text-4xl italic">
                    <h1 className="heading text-4xl font-bold drop-shadow-lg">Towards a brighter Diwali!</h1>
                </div>
                <div className="grid md:grid-cols-3 gap-10 grid-cols-1 px-10">
                    <div className="flex justify-center text-center">
                        <div className="rounded-lg shadow-lg shadow-yellow-500 bg-white max-w-sm">
                            <a href="#!" className="flex justify-center items-center p-5">
                                <FcIdea className="text-7xl rounded-full" />
                            </a>
                            <div className="p-7">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">What is Raunakh?</h5>
                                <p className="text-gray-700 text-sm mb-4">
                                    Raunakh is a special fundraising event, held annually close to this festival of happiness and lights - Diwali, to brighten up a few faces for this prosperous occasion
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center text-center">
                        <div className="rounded-lg shadow-lg shadow-red-500 bg-white max-w-sm">
                            <a href="#!" className="flex justify-center items-center p-5">
                                <AiFillHeart className="text-7xl rounded-full text-red-500" />
                            </a>
                            <div className="p-7">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">What does it do?</h5>
                                <p className="text-gray-700 text-sm mb-4">
                                    A charity Fundraiser by Octave Music Society of MSIT in Collaboration with IEEE MSIT and Prakriti MSIT to raise contributions and help out the disadvantaged and less fortunate citizen celebrate a prosperous, memorable Diwali.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center text-center">
                        <div className="rounded-lg shadow-lg shadow-green-500 bg-white max-w-sm">
                            <a href="#!" className="flex justify-center items-center p-5">
                                <BiDonateHeart className="text-7xl rounded-full text-green-500" />
                            </a>
                            <div className="p-7">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">Why do we do this?</h5>
                                <p className="text-gray-700 text-sm mb-4">
                                    Being compassionate to people who are less privileged, we feel pleased to take up this noble cause to bring heartwarming smiles just as beautiful as lights of Diwali that are Lit up.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
