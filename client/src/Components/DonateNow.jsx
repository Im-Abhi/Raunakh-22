import React from "react";

const DonateNow = () => {
    return (
        <>
            <div className="donate__now border-t-2 border-white py-24 flex justify-center items-center text-center">
                <div className="bgImage_container container">
                    <h1 className="quote text-6xl p-5">Charity begins at home, but shouldn't end there!</h1>
                    <p className="author text-2xl italic py-8">- a scottish proverb</p>
                    <a href="#home">
                        <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out">Donate Now</button>
                    </a>
                </div>
            </div>
        </>
    )
};

export default DonateNow;
