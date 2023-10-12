import React from "react";
import IMg from "../assets/slide-1.jpg"
export default function Section2() {

    return (
        <>
            <hr className="w-[20%]" />
            <h1 className="font-bold text-5xl w-[20%] mx-auto mt-8 mb-8 border-b-[1px] border-t-[1px] py-4 text-[#434343] text-center">WORK</h1>
            <div className="flex flex-col md:flex-row px-4 md:px-44 gap-6 text-sm">
                <p>I have traced the Rebel spies to her. Now she is my only link to finding their secret base. You don't believe in the Force, do you? All right. Well, take care of yourself, Han. Hokey religions and ancient weapons are no match for a good blaster at your side.</p>
                <p>I have traced the Rebel spies to her. Now she is my only link to finding their secret base. You don't believe in the Force, do you? All right. Well, take care of yourself, Han. Hokey religions and ancient weapons are no match for a good blaster at your side.</p>
            </div>
            <img className="px-4 md:px-44 pt-12" src={IMg} alt="" />
            <div className="flex flex-col md:flex-row  py-10 px-4 md:px-44 gap-6 text-sm">
                <p>I have traced the Rebel spies to her. Now she is my only link to finding their secret base. You don't believe in the Force, do you? All right. Well, take care of yourself, Han. Hokey religions and ancient weapons are no match for a good blaster at your side.</p>
                <p>I have traced the Rebel spies to her. Now she is my only link to finding their secret base. You don't believe in the Force, do you? All right. Well, take care of yourself, Han. Hokey religions and ancient weapons are no match for a good blaster at your side.</p>
            </div>
            <div className="px-44 grid lg:grid-cols-3 lg:grid-rows-2 grid-cols-2 grid-rows-3 text-center gap-6">
                <div>
                    <h1 className="linedecoration font-semibold text-lg border-b-2 py-6">INTERDUM MAGNA AUGUE</h1>
                    <p className="py-2 text-base tracking-tighter">I'm surprised you had the courage to take the responsibility yourself.</p>
                </div>
                <div>
                    <h1 className=" linedecoration font-semibold text-lg border-b-2 py-6">ETIAM ULTRICES JUSTO</h1>
                    <p className="py-2 text-base tracking-tighter">I'm surprised you had the courage to take the responsibility yourself.</p>
                </div><div>
                    <h1 className=" linedecoration font-semibold text-lg border-b-2 py-6">NULLA UT FELIS IN PURUS</h1>
                    <p className="py-2 text-base tracking-tighter">I'm surprised you had the courage to take the responsibility yourself.</p>
                </div><div>
                    <h1 className=" linedecoration font-semibold text-lg border-b-2 py-6">SED PRETIUM BLANDIT ORCI</h1>
                    <p className="py-2 text-base tracking-tighter">I'm surprised you had the courage to take the responsibility yourself.</p>
                </div><div>
                    <h1 className=" linedecoration font-semibold text-lg border-b-2 py-6">AENEAN LECTUS ELIT</h1>
                    <p className="py-2 text-base tracking-tighter">I'm surprised you had the courage to take the responsibility yourself.</p>
                </div><div>
                    <h1 className=" linedecoration font-semibold text-lg border-b-2 py-6">SED ALIQUET RISUS</h1>
                    <p className="py-2 text-base tracking-tighter">I'm surprised you had the courage to take the responsibility yourself.</p>
                </div>
            </div>
            <div className=" text-center py-16">
                <h1 className=" border-t-2 w-[50%] mx-auto text-[#464646] py-8 font-semibold text-2xl">You don't believe on the Force, do you?</h1>
                <button className="bg-[#464646] text-white px-6 py-2 text-sm font-semibold">SAY HY</button>
                </div>
            </>
    )
}