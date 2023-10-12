import React from "react";
import { FaFacebookF, FaVimeoSquare, FaYoutube, FaGithubAlt } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillDribbbleCircle, AiFillInstagram, AiOutlineBehance } from 'react-icons/ai';
import { TfiGoogle } from 'react-icons/tfi';
import { IoLogoTumblr } from 'react-icons/io';


export default function Section1() {
    return (
        <>
            <div className="bg-img flex flex-col items-center justify-center text-white">
                <hr className="hidden md:block w-[50%]" />
                <h1 className="  text-[6rem] lg:text-[9.5rem] font-semibold ">BONJOUR </h1>
                <h1 className="  text-[4rem] pb-4 lg:text-[6.25rem]" >BIENVENUE À SCRN</h1>
                <hr className=" hidden md:block w-[50%]" />
                <p className="text-center pt-6 font-normal lg:font-semibold text-lg lg:text-xl w-[80%]">Ne soyez pas trop fier de cette terreur technologique que vous avez construit. La capacité de détruire une planète est insignifiant    à côté de la puissance de la Force.</p>
                <div className="flex flex-wrap  w-[30%] justify-between pt-6">
                    <div className="w-[2rem] h-[2rem] bg-[#4D6BA2] rounded-md flex justify-center items-center  opasity ">
                        <FaFacebookF />
                    </div>
                    <div className="w-[2rem] h-[2rem] bg-[#229AC6] rounded-md flex justify-center items-center opasity ">
                        <AiOutlineTwitter  />
                    </div>
                    <div className="w-[2rem] h-[2rem] bg-[#F73187] rounded-md flex justify-center items-center  opasity">
                        <AiFillDribbbleCircle  />
                    </div>
                    <div className="w-[2rem] h-[2rem] bg-[#DE4936] rounded-md flex justify-center items-center opasity ">
                        <TfiGoogle />
                    </div>
                    <div className="w-[2rem] h-[2rem] bg-[#211F20] rounded-md flex justify-center items-center opasity">
                        <AiFillInstagram/>
                    </div>
                    <div className="w-[2rem] h-[2rem] bg-[#4D6BA2] rounded-md flex justify-center items-center opasity">
                        <AiOutlineBehance/>
                    </div>
                    <div className="w-[2rem] h-[2rem] bg-[#229AC6] rounded-md flex justify-center items-center opasity ">
                        <FaVimeoSquare/>
                    </div>
                    <div className="w-[2rem] h-[2rem] bg-[#F73187] rounded-md flex justify-center items-center opasity">
                        <FaYoutube />
                    </div>
                    <div className="w-[2rem] h-[2rem] bg-[#DE4936] rounded-md flex justify-center items-center opasity">
                        <IoLogoTumblr />
                    </div>
                    <div className="w-[2rem] h-[2rem] bg-[#211F20] rounded-md flex justify-center items-center opasity">
                        <FaGithubAlt/>
                    </div>



                </div>
            </div>

        </>
    )
}