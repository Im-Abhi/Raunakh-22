import React, { useState } from "react";

import useWindowSize from "../hooks/useWindowSize";
import useWindowScroll from "../hooks/useWindowScroll";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
    const width = useWindowSize();
    const scroll = useWindowScroll();

    const [menuToggle, setMenuToggle] = useState(false);

    if (width > 850) {
        if (menuToggle) {
            setMenuToggle((prev) => !prev);
        }
    }

    const handleMenuToggle = () => {
        setMenuToggle((prev) => !prev);
    };

    function handleScrollToTop() {
        window.scroll(0, 0);
    }

    return (
        <div className="relative">
            <nav className="flex flex-row mx-auto max-w-7xl my-2 justify-between px-4 relative">
                <div className="flex w-[100px] h-[100px]">
                    <img
                        className="object-contain w-full h-full"
                        src="./logo.png"
                        alt="logo"
                    />
                </div>

                <div className="md:flex md:flex-row items-center gap-5 hidden">
                    <a className="text-xl hover:text-blue-500" href="#home" rel="noreferrer">
                        Home
                    </a>
                    <a className="text-xl hover:text-blue-500" href="#about" rel="noreferrer">
                        About
                    </a>
                    <a className="text-xl hover:text-blue-500" href="#gallery" rel="noreferrer">
                        Gallery
                    </a>
                    <a className="text-xl hover:text-blue-500" href="#societies" rel="noreferrer">
                        Society
                    </a>
                    <a className="text-xl hover:text-blue-500" href="#contact">
                        Contact
                    </a>
                </div>

                <MenuIcon
                    className="mobileMenuToggle"
                    onClick={handleMenuToggle}
                />
            </nav>

            {menuToggle && (
                <div className="mobileMenu">
                    <div className="flex flex-col w-screen justify-start p-0">
                        <CloseIcon
                            className="mobileMenuToggle"
                            onClick={handleMenuToggle}
                        />

                        <div className="flex flex-col justify-center items-center h-full w-full mt-[120px] sm:mt-[200px] py-0 px-[30px]">
                            <a
                                className="text-center w-full text-2xl sm:text-3xl font-medium py-5 px-0 hover:text-blue-500"
                                href="#home"
                                onClick={handleMenuToggle}
                                rel="noreferrer"
                            >
                                Home
                            </a>
                            <a
                                className="text-center w-full text-2xl sm:text-3xl font-medium py-5 px-0 hover:text-blue-500"
                                href="#about"
                                onClick={handleMenuToggle}
                                rel="noreferrer"
                            >
                                About
                            </a>
                            <a
                                className="text-center w-full text-2xl sm:text-3xl font-medium py-5 px-0 hover:text-blue-500"
                                href="#gallery"
                                onClick={handleMenuToggle}
                                rel="noreferrer"
                            >
                                Gallery
                            </a>
                            <a
                                className="text-center w-full text-2xl sm:text-3xl font-medium py-5 px-0 hover:text-blue-500"
                                href="#societies"
                                onClick={handleMenuToggle}
                                rel="noreferrer"
                            >
                                Society
                            </a>
                            <a
                                className="text-center w-full text-2xl sm:text-3xl font-medium py-5 px-0 hover:text-blue-500"
                                href="#contact"
                                onClick={handleMenuToggle}
                                rel="noreferrer"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            )}
            {scroll > 100 && (
                <button
                    className="cursor-pointer fixed bottom-[10px] right-[10px] w-[35px] h-[35px] sm:bottom-[20px] sm:right-[20px] sm:w-[50px] sm:h-[50px] rounded-full bg-white/80 outline-none border-none z-50 hover:bg-white/65 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 shadow-md backdrop-blur-lg"
                    onClick={handleScrollToTop}
                >
                    <img
                        width={"100%"}
                        height={"100%"}
                        src="/arrow.png"
                        alt="arrow"
                    />
                </button>
            )}
        </div>
    );
};

export default Navbar;
