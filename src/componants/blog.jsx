import React from "react";
import Img1 from "../assets/post-img-1.jpg"
import Img2 from "../assets/post-img-2.jpg"
import Img3 from "../assets/post-img-3.jpg"
export default function Blog() {
    return (
        <>
            <div className="bg-[#2A2A2A] py-20 text-[#CCCCCC] ">

                <div className=" flex justify-center items-center  ">
                    <h1 className=" py-4  border-t-[1px] border-b-[1px]  font-bold text-6xl  ">BLOG</h1>
                </div>
                <div className="flex text-center flex-col md:flex-row px-4 md:px-44 gap-6 text-sm pt-10">
                    <p>I have traced the Rebel spies to her. Now she is my only link to finding their secret base. You don't believe in the Force, do you? All right. Well, take care of yourself, Han. Hokey religions and ancient weapons are no match for a good blaster at your side.</p>
                    <p>I have traced the Rebel spies to her. Now she is my only link to finding their secret base. You don't believe in the Force, do you? All right. Well, take care of yourself, Han. Hokey religions and ancient weapons are no match for a good blaster at your side.</p>
                </div>
                <div className="pl-4  md:px-10 py-10 md:flex  ">

                    <div className=" w-[100%] md:w-[70%]">
                        <div>
                            <img src={Img1} alt="" />
                            <h1 className="font-bold text-3xl py-6 ">IT'S LATE, I'M IN FOR IT AS IT IS</h1>
                            <p className="text-sm">I find your lack of faith disturbing. Hey, Luke! May the Force be with you. The more you tighten your grip, Tarkin, the more star systems will slip through your fingers. Red Five standing by. till, she's got a lot of spirit. I don't know, what do you think? What!? Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going. Still, she's got a lot of spirit. I don't know, what do you think? Ye-ha! [...]</p>
                            <button className="bg-black py-2 px-4 mt-6 text-sm font-bold">READ ME</button>
                        </div>
                        <div className="pt-6">
                            <img src={Img2} alt="" />
                            <h1 className="font-bold text-3xl py-6">IT'S LATE, I'M IN FOR IT AS IT IS</h1>
                            <p className="text-sm">I find your lack of faith disturbing. Hey, Luke! May the Force be with you. The more you tighten your grip, Tarkin, the more star systems will slip through your fingers. Red Five standing by. till, she's got a lot of spirit. I don't know, what do you think? What!? Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going. Still, she's got a lot of spirit. I don't know, what do you think? Ye-ha! [...]</p>
                            <button className="bg-black py-2 px-4 mt-6 text-sm font-bold">READ ME</button>
                        </div>
                        <div className="pt-6">
                            <img src={Img3} alt="" />
                            <h1 className="font-bold text-3xl py-6">IT'S LATE, I'M IN FOR IT AS IT IS</h1>
                            <p className="text-sm">I find your lack of faith disturbing. Hey, Luke! May the Force be with you. The more you tighten your grip, Tarkin, the more star systems will slip through your fingers. Red Five standing by. till, she's got a lot of spirit. I don't know, what do you think? What!? Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going. Still, she's got a lot of spirit. I don't know, what do you think? Ye-ha! [...]</p>
                            <button className="bg-black py-2 px-4 mt-6 text-sm font-bold">READ ME</button>
                        </div>
                    </div>
                    <div className="  md:w-[30%]  px-8 py-6 md:py-0 ">
                        <div className="bg-white w-[1px] h-[80rem]  absolute left-[2%] md:left-[70%]  "></div>

                        <div>
                            <h1 className=" border-b-2 ">CATEGORIES</h1>
                            <ul className="list-disc py-4  pl-4 text-sm">
                                <li className="py-2">Design</li>
                                <li className="py-2">Development</li>
                                <li className="py-2">Video</li>
                                <li className="py-2">News</li>
                                <li className="py-2">Featured</li>
                                <li className="py-2">Star Wars</li>
                            </ul>
                        </div>
                        <div className="pt-4">
                            <h1 className=" border-b-2 ">RECENT POSTS</h1>
                            <ul className="list-disc py-4  pl-4 text-sm">
                                <li className="py-2">It's late, I'm in for it as it is February 26, 2015</li>
                                <li className="py-2">Red Five standing by February 26, 2015</li>
                                <li className="py-2">A Vimeo Video Post February 26, 2015</li>
                            </ul>

                        </div>
                        <div className="pt-4">
                            <h1 className=" border-b-2 ">RECENT COMMENTS</h1>
                            <ul className="list-disc py-4  pl-4 text-sm">
                                <li>loan payday payday loan online payday loan no fax loan… Written by Direct Lenders on Tuesday, 20 March 2018 11:11</li>
                                <li>guest test post bbcode html http://temresults2018.com/ simple Written by GuestPeato on Monday, 19 March 2018 15:49</li>

                                <li>where did you get your domperidone - http://kisokika38.tumblr.com/#28903 cheap domperidone… Written by Arupazef on Thursday, 01 February 2018 08:51</li>
                                <li>ATK Galleria hd home sex video. The pics are small… Written by Thomasrob on Wednesday, 31 January 2018 20:40</li>
                                <li>Hurrah, that's what I was looking for, what a information!… Written by Verla on Wednesday, 24 January 2018 18:36</li>
                            </ul>
                        </div>
                        <div className="pt-4">
                            <h1 className=" border-b-2 ">ARCHIVES</h1>
                            <ul className="list-disc py-4  pl-4 text-sm">
                                <li>February 2015</li>
                            </ul>
                        </div>
                        <div className="pt-4">
                            <h1 className=" border-b-2 ">TAGS</h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}