import React from "react";

const About = () => {
    return (
        <>
            <div className="about__container px-4" id="about">
                <div className="about_heading text-center py-10 text-4xl italic">
                    <h1 className="heading">Towards a brighter Diwali!</h1>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="flex justify-center text-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!">
                                <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                            </a>
                            <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">What is Raunakh?</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    Raunakh is a special fundraising event, held annually close to this festival of happiness and lights - Diwali, to brighten up a few faces for this prosperous occasion
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center text-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!">
                                <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                            </a>
                            <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">What does it do?</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    A charity Fundraiser by Octave Music Society of MSIT in Collaboration with IEEE MSIT and Prakriti MSIT to raise contributions and help out the disadvantaged and less fortunate citizen celebrate a prosperous, memorable Diwali.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center text-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!">
                                <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                            </a>
                            <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">Why do we do this?</h5>
                                <p className="text-gray-700 text-base mb-4">
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
