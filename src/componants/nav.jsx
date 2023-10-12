import React from "react";
import IMG1 from "../assets/ar_aa.gif"
import IMG2 from "../assets/de_de.gif"
import IMG3 from "../assets/en.gif"
import IMG4 from "../assets/fr_fr.gif"
export default function Navbar() {

    return (

        <>
            <nav className=" w-[100%] bg-white  flex items-center justify-between py-4 px-8 text-sm border-b-4 fixed ">
                <p className=" font-bold text-3xl text-[#D6D6D6]">SCRN</p>
                <ul className=" flex w-[40rem] text-[#515151] justify-evenly">
                    <li>HOME</li>
                    <li>WORK</li>
                    <li>SERVICES</li>
                    <li>ABOUT</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
            <div className="fixed z-50  flex w-[10rem] justify-evenly top-[100px]">
                <img src={IMG1} alt="" />
                <img src={IMG2} alt="" />
                <img src={IMG3} alt="" />
                <img src={IMG4} alt="" />
            </div>


        </>
    )
}