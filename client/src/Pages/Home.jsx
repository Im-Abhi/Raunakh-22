import React from "react";

import Testimonials from "../Components/Testimonials";
import About from "../Components/About";
import Gallery from "../Components/Gallery";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {
    return (
        <>
            <About />
            <Testimonials />
            <Gallery />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;