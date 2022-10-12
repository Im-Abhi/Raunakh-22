import React from "react";
import { FcIdea } from 'react-icons/fc';
import { AiFillHeart } from 'react-icons/ai';
import { BiDonateHeart } from 'react-icons/bi';

const About = () => {
    return (
        <>
            <div className="about__container px-4" id="about">
                <div className="about_heading text-center py-10 text-4xl italic">
                    <h1 className="heading">Towards a brighter Diwali!</h1>
                </div>
                <div className="grid md:grid-cols-3 gap-5 grid-cols-1">
                    <div className="flex justify-center text-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!" className="flex justify-center items-center p-10">
                                <FcIdea className="text-7xl rounded-full" />
                            </a>
                            <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">What is Raunakh?</h5>
                                <p className="text-gray-700 text-sm mb-4">
                                    Raunakh is a special fundraising event, held annually close to this festival of happiness and lights - Diwali, to brighten up a few faces for this prosperous occasion
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center text-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!" className="flex justify-center items-center p-10">
                                <AiFillHeart className="text-7xl rounded-full text-red-500" />
                            </a>
                            <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">What does it do?</h5>
                                <p className="text-gray-700 text-sm mb-4">
                                    A charity Fundraiser by Octave Music Society of MSIT in Collaboration with IEEE MSIT and Prakriti MSIT to raise contributions and help out the disadvantaged and less fortunate citizen celebrate a prosperous, memorable Diwali.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center text-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!" className="flex justify-center items-center p-10">
                                <BiDonateHeart className="text-7xl rounded-full text-green-500" />
                            </a>
                            <div className="p-6">
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
