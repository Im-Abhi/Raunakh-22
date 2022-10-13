import React from "react";

const Contact = () => {

    return (
        <>
            <div className="max-w-screen-xl px-8 py-12 mx-auto rounded-lg md:px-12 lg:px-16 xl:px-32 bg-gray-800 text-gray-100">
                <div className="flex justify-evenly items-center sm:flex-row flex-col gap-5">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Questions ?</h2>
                    </div>
                    <div className="cta">
                        <a href="mailto:vedanttrivedi02@gmail.com">
                            <button type="button" className="inline-block px-6 py-2 border-2 border-yellow-600 text-yellow-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-yellow-600 hover:text-white focus:outline-none focus:ring-0 transition duration-300 ease-in-out">
                                Contact
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contact;
