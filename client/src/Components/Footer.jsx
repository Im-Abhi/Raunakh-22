import React from "react";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaHeart } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

const Footer = () => {
    return (
        <>
            <footer className="text-center border-t-4 border-white bg-gray-800">
                <section className="section1 flex justify-evenly flex-col sm:flex-row items-center">
                    <h1 className="made-by-heading py-4 text-xl italic text-white">Made with
                        <FaHeart className="text-red-500 inline mx-2" />
                        by IEEE Web Team</h1>
                    <div className="footer__socials flex items-center text-white gap-4 text-2xl pb-2 sm:p-0">
                        <a href="https://www.facebook.com/ieeemsit/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1251b1]">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/ieeemsit/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ab146f]">
                            <FaInstagram />
                        </a>
                        <a href="http://ieee.msit.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#1b9ff1]">
                            <CgWebsite />
                        </a>
                        <a href="https://in.linkedin.com/company/ieeemsit/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1873b9]">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </section>
                <section className="section2 grid sm:grid-cols-3 grid-cols-1 pb-4 text-gray-400">
                    <p className="text-sm">
                        <a href="/privacy-policy">Privacy Policy</a>
                    </p>
                    <p className="text-sm">
                        <a href="/terms-and-conditions">Terms and Conditions</a>
                    </p>
                    <p className="text-sm">
                        <a href="/refund-policy">Refund Policy</a>
                    </p>
                </section>
            </footer>
        </>
    )
}

export default Footer;
