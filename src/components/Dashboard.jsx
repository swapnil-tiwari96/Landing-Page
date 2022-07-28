import React from "react";
import Dash from "../assests/dash.png"

const Dashboard = () =>
{
    return (
        <div className="w-full bg-black text-white py-16 px-4">
            <div className="max-w-[1240] mx-auto grid md:grid-cols-2">
                <img src={Dash} alt="Dashboard" className="w-[500px] mx-auto my-4" />
                <div className="flex flex-col justify-center">
                    <h1 className="text-[#72FFFF] font-bold md:text-4xl sm:text-2xl text-xl text-center pb-6">
                        Marketing Dashboard
                    </h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="bg-[#5800FF] text-[#72FFFF] w-[200px] rounded-l mx-auto px-1 py-2 m-10 font-bold border-5">Get Started</button>
                </div>
            </div>
        </div>);
};

export default Dashboard;
