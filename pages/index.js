import React from "react";
import FirstPage from "../components/FirstPage";
import SecondPage from "../components/SecondPage";
import Thirdpage from "../components/ThirdPage";
import Forthpage from "../components/ForthPage";
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
      <ForthPage />
      <FifthPage />
      <SixthPage />
    </div>
      </>
  )
}