import React from "react";
import Typed from "react-typed"

const Hero = () =>
{
    return (
        <div>
            <div className="max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <h1 className="md:text-7xl md:py-6 sm:text-6xl text-4xl font-bold py-5">GROW WITH US</h1>
                <div className="flex justify-center space-x-3">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold">Marketing solutions for </p>
                    <Typed className="md:text-5xl sm:text-4xl text-xl font-bold bg-[#5800FF] text-[#72FFFF] pb-2"
                        strings={["B2B", "B2C", "PAAS", "SAAS"]}
                        typeSpeed={120}
                        backSpeed={150}
                        loop
                    />
                </div>
                <p className="md:text-3xl sm:text-2xl text-xl text-gray-600">Market with proven strategies</p>
                <button className="bg-[#5800FF] text-[#72FFFF] w-[200px] rounded-l mx-auto px-1 py-2 m-10 font-bold border-5">Get Started</button>
            </div>
        </div>);
};

export default Hero;
