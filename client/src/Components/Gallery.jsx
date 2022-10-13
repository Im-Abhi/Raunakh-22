import React from "react";
import OwlCarousel from 'react-owl-carousel';

import { Galleryfive, Galleryfour, Galleryone, Gallerysix, Gallerythree, Gallerytwo } from "../Constants/GalleryImages";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Gallery = () => {
    return (
        <>
            <div className="gallery__container border-t-2 border-white p-4 pb-16 bg-[#1f2937]" id="gallery">
                <div className="gallery_heading text-center py-10 text-4xl italic">
                    <h1 className="heading text-4xl font-bold drop-shadow-lg">Gallery</h1>
                </div>
                <OwlCarousel className='owl-theme'
                    margin={15}
                    nav={false}
                    loop={true}
                    dots={true}
                    items={1}
                    lazyLoad={true}
                    autoplay={true}
                    autoplayTimeout={3000}
                    animateIn='fadeIn'
                    responsive={
                        {
                            768: {
                                items: 3
                            }
                        }
                    }>
                    <div className="item">
                        <div className="image_container rounded-lg shadow-lg shadow-black-800 h-72 border-0 border-l-2 border-white">
                            <img src={Galleryone} alt="" className="w-full h-full" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="image_container rounded-lg shadow-lg shadow-black-800 h-72 border-0 border-l-2 border-white">
                            <img src={Gallerytwo} alt="" className="w-full h-full" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="image_container rounded-lg shadow-lg shadow-black-800 h-72 border-0 border-l-2 border-white">
                            <img src={Gallerythree} alt="" className="w-full h-full" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="image_container rounded-lg shadow-lg shadow-black-800 h-72 border-0 border-l-2 border-white">
                            <img src={Galleryfour} alt="" className="w-full h-full" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="image_container rounded-lg shadow-lg shadow-black-800 h-72 border-0 border-l-2 border-white">
                            <img src={Galleryfive} alt="" className="w-full h-full" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="image_container rounded-lg shadow-lg shadow-black-800 h-72 border-0 border-l-2 border-white">
                            <img src={Gallerysix} alt="" className="w-full h-full" />
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </>
    )
}

export default Gallery;
