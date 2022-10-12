import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="text-center">
                <section className="section1 flex justify-evenly">
                    <h1 className="made-by-heading">Made by IEEE Web Team</h1>
                    <div className="footer__socials">

                    </div>
                </section>
                <section className="section2 grid sm:grid-cols-3 grid-cols-1">
                    <p className="text-1xl">
                        <a href="/privacy-policy">Privacy Policy</a>
                    </p>
                    <p className="text-1xl">
                        <a href="/terms-and-conditions">Terms and Conditions</a>
                    </p>
                    <p className="text-1xl">
                        <a href="/refund-policy">Refund Policy</a>
                    </p>
                </section>
            </footer>
        </>
    )
}

export default Footer;
