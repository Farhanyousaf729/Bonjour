import React from "react";
import Img from "../assets/team-1.png"
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
export default function Team() {
    return (

        <>
            <div className="text-[#434343] pb-20  ">
                <div className=" flex justify-center items-center pb-10 ">
                    <h1 className=" py-4  border-t-[1px] border-b-[1px]  font-bold text-4xl  ">TEAM</h1>
                </div>
                <div className=" md:flex px-4 md:px-44 gap-2">
                    <div className="flex flex-col items-center text-center">
                        <img src={Img} alt="" />
                        <h1 className="pt-4 font-bold text-lg">CALI DOE</h1>
                        <div className="flex text-xl w-[5rem] py-4  justify-between"><FaFacebookF /><AiOutlineTwitter /> <AiFillInstagram /></div>
                        <p className="text-sm font-semibold">Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going. You're all clear.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src={Img} alt="" />
                        <h1 className="pt-4 font-bold text-lg pt-4">CALI DOE</h1>
                        <div className="flex text-xl w-[5rem] py-4 justify-between"><FaFacebookF /><AiOutlineTwitter /> <AiFillInstagram /></div>
                        <p className="text-sm font-semibold">Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going. You're all clear.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src={Img} alt="" />
                        <h1 className="pt-4 font-bold text-lg pt-4">CALI DOE</h1>
                        <div className="flex text-xl w-[5rem] py-4 justify-between"><FaFacebookF /><AiOutlineTwitter /> <AiFillInstagram /></div>
                        <p className="text-sm font-semibold">Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going. You're all clear.</p>
                    </div>
                </div>
                <hr  className="w-[60%] mx-auto mt-10"/>
                <h1 className="text-center pt-10 font-semibold text-[#434343] text-3xl">You don't believe on the Force, do you?</h1>
                <div className="pt-10 text-center">
                        <button className=" text-white bg-[#434343] px-4 py-2 font-bold text-sm ">SAY HY</button>
                    </div>
            </div>
            <div className="bg_img3">
                <h1 className="w-[80%] pt-32 mx-auto text-center text-white font-bold text-3xl italic font-sans">A TREMOR IN THE FORCE. THE LAST TIME I FELT IT WAS IN THE PRESENCE OF MY OLD MASTER</h1>
            </div>
        </>
    )
}