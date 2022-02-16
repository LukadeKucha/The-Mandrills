import React from "react";
import FirstPage from "../components/FirstPage";
import ThirdPage from "../components/Thirdpage";
import SecondPage from "../components/SecondPage";
import FourthPage from "../components/FourthPage";
import FifthPage from "../components/FifthPage";
import SixthPage from "../components/SixthPage";
import Navbar from "../components/Navbar";
export default function Index() {

  return(    
    <>
    <div className="Container">
      <Navbar />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
    </div>
      </>
  )
}