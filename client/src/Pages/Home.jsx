import React from "react";

import About from "../Components/About";
import Gallery from "../Components/Gallery";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Societies from "../Components/Societies";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Gallery />
            <Societies />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
