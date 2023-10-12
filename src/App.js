import React from "react"
import Navbar from "./componants/nav"
import "./index.css"
import Section1 from "./componants/section1"
import Section2 from "./componants/section2"
import Services from "./componants/services"
import About from "./componants/about"
import Team from "./componants/team"
import Blog from "./componants/blog"
export default function App (){
  return(
    <>
    <Navbar/>
    <Section1/>
    <Section2/>
    <Services/>
    <About/>
    <Team/>
    <Blog/>
    </>
  )
}