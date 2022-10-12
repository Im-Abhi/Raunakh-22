import React from "react";
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Gallery = () => {
    return (
        <>
            <div className="gallery__container" id="gallery">
                <div className="gallery_heading text-center py-10 text-4xl italic">
                    <h1 className="heading">Gallery</h1>
                </div>
                <OwlCarousel className='owl-theme'
                    margin={15}
                    nav={true}
                    loop={true}
                    dots={false}
                    items={1}
                    responsive={
                        {
                            768: {
                                items: 3
                            }
                        }
                    }>
                    <div className="item">
                        <img src="https://mdbootstrap.com/img/new/standard/city/043.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="https://mdbootstrap.com/img/new/standard/city/043.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="https://mdbootstrap.com/img/new/standard/city/043.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="https://mdbootstrap.com/img/new/standard/city/043.jpg" alt="" />
                    </div>
                </OwlCarousel>;
            </div>
        </>
    )
}

export default Gallery;
