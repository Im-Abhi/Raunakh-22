import React, { Fragment } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'

import {
    Buzz,
    IEEE,
    Mutants,
    NssMSI,
    NssMsit,
    Octave4,
    Prakriti4,
    Rotaract,
    unfiltered
} from "../Constants/SocietyImages";

const icons = [<FaFacebookF />, <FaLinkedin />, <FaInstagram />];

const headedBySocietyData = {
    heading: "Headed By",
    data: [
        {
            image: Mutants,
            links: [
                { link: null },
                { link: null },
                { link: null },
            ],
        },
    ]
}

const collaborationSocietyData = {
    heading: "In Collaboration With",
    data: [
        {
            image: Prakriti4,
            links: [
                { link: "https://www.facebook.com/msitprakriti/" },
                { link: "https://in.linkedin.com/company/prakritimsit/" },
                { link: "https://www.instagram.com/prakriti_msit/" },
            ],
        },
        {
            image: Octave4,
            links: [
                { link: "https://www.facebook.com/octave.msit/" },
                { link: "https://www.linkedin.com/company/octave-music-society/" },
                { link: "https://www.instagram.com/octavemusicsociety/" },
            ],
        },
        {
            image: IEEE,
            links: [
                { link: "https://www.facebook.com/ieeemsit/" },
                { link: "https://in.linkedin.com/company/ieeemsit/" },
                { link: "https://www.instagram.com/ieeemsit/" },
            ],
        },
    ]
}

const mediaPartnerSocietyData = {
    heading: "With Media Partner",
    data: [
        {
            image: unfiltered,
            links: [
                { link: null },
                { link: null },
                { link: "https://www.instagram.com/inceptionwavemsi_msit/" },
            ],
        },
    ]
}

const outreachPartnerSocietyData = {
    heading: "And Outreach Partner",
    data: [
        {
            image: Buzz,
            links: [
                { link: "https://www.facebook.com/ipubuzz/" },
                { link: "https://www.linkedin.com/company/ipubuzz" },
                { link: "https://www.instagram.com/ipubuzz/" },
            ],
        },
    ]
}

const supportSocietyData = {
    heading: "With Support",
    data: [
        {
            image: NssMSI,
            links: [
                { link: "https://www.facebook.com/nssmsi/" },
                { link: "https://www.linkedin.com/company/national-service-scheme-msi/" },
                { link: "https://www.instagram.com/nss_msi/" },
            ],
        },
        {
            image: NssMsit,
            links: [
                { link: null },
                { link: null },
                { link: null },
            ],
        },
        {
            image: Rotaract,
            links: [
                { link: "https://www.facebook.com/RacNewDelhiNext" },
                { link: null },
                { link: "https://www.instagram.com/rcnewdelhinext/" },
            ],
        },
    ]
}

const RenderSocietyBlock = ({ heading, dataArray }) => {
    return (
        <div className="societies__section flex flex-col gap-6">
            <h2 className="w-max mx-auto uppercase text-xl border-b px-1">{heading}</h2>
            <div className="flex flex-wrap gap-5 w-11/12 mx-auto">
                {(dataArray).map((data, index) => {
                    let { image, links } = data;

                    return (
                        <div key={index} className="mx-auto grid place-content-center basis-[30%]">
                            <div className="cursor-pointer flex items-center justify-center relative bg-white w-44 aspect-square rounded-[50%] overflow-hidden">
                                <img src={image} alt="" className="max-w-[90%] max-h-[90%]" />
                                {
                                    (links[0].link || links[1].link || links[2].link) && (
                                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-evenly gap-2 p-2 transition-all duration-300">
                                            {(links).map((item, index) => {
                                                if (item.link) {
                                                    return (
                                                        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                                                            <span className="grid place-content-center text-lg text-[#343434]/70 p-3 bg-white rounded-[50%] hover:bg-blue-600 hover:text-white transition-all duration-300">
                                                                {icons[index]}
                                                            </span>
                                                        </a>
                                                    )
                                                } else {
                                                    return (
                                                        <Fragment key={index}></Fragment>
                                                    )
                                                }
                                            })}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const Societies = () => {
    return (
        <>
            <div className="societies__container p-4 border-t-2 border-white pb-16" id="societies">
                <div className="societies_heading text-center py-10 text-4xl italic">
                    <h1 className="heading">Societies</h1>
                </div>
                <div className="flex flex-col gap-16">
                    {
                        [
                            headedBySocietyData,
                            collaborationSocietyData,
                            mediaPartnerSocietyData,
                            outreachPartnerSocietyData,
                            supportSocietyData
                        ].map((societyData, id) => {
                            return (
                                <RenderSocietyBlock
                                    key={id}
                                    heading={societyData.heading}
                                    dataArray={societyData.data}
                                />
                            )
                        })
                    }
                </div>
            </div>
            {/* <!-- team-area-end --> */}
        </>
    )
}

export default Societies;
