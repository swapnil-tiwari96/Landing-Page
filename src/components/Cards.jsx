import React from "react";
import Typed from "react-typed"
// import Single from "../assests/single.png"
// import Double from "../assests/double.png"
// import Triple from "../assests/group.png"

const Cards = () =>
{
    return (
        <div className="w-full py-[10rem] px-4 bg-black text-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full hover:shadow-xl hover:shadow-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-100">
                    {/* <img className="w-[80px] h-[80px] mx-auto mt-[-3rem] bg-white" src={Single} alt="/" /> */}
                    <h2 className="text-2xl font-bold text-center py-8">Basic</h2>
                    <p className="text-center text-4xl font-bold pb-5">$149</p>
                    <div className="text-center font:medium  text-[#72FFFF]">
                        <Typed
                            strings={["Social Media"]}
                            typeSpeed={50}
                            backSpeed={70}
                            loop
                        />
                    </div>
                    <button className="bg-[#72FFFF] text-[#5800FF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
                </div>
                <div className="w-full hover:shadow-xl hover:shadow-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-100">
                    {/* <img className="w-[80px] h-[60px] mx-auto mt-[-3rem] bg-transparent" src={Double} alt="/" /> */}
                    <h2 className="text-2xl font-bold text-center py-8">Intermediate</h2>
                    <p className="text-center text-4xl font-bold pb-5">$199</p>
                    <div className="text-center font:medium  text-[#72FFFF]">
                        <Typed
                            strings={["Social Media", "Banners", "Posters"]}
                            typeSpeed={50}
                            backSpeed={70}
                            loop
                        />
                    </div>
                    <button className=" text-[#72FFFF] bg-[#5800FF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
                </div>
                <div className="w-full hover:shadow-xl hover:shadow-white flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-100">
                    {/* <img className="w-[80px] h-[80px] mx-auto mt-[-3rem] bg-white" src={Triple} alt="/" /> */}
                    <h2 className="text-2xl font-bold text-center py-8">Advance</h2>
                    <p className="text-center text-4xl font-bold pb-5">$399</p>
                    <div className="text-center font:medium  text-[#72FFFF] pb-2">
                        <Typed
                            strings={["Social Media", "Social Media", "Banners", "Posters", "Website", ""]}
                            typeSpeed={50}
                            backSpeed={70}
                            loop
                        />
                    </div>
                    <button className="bg-[#72FFFF] text-[#5800FF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;