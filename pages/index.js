import React from "react";
import FirstPage from "../components/FirstPage";
import SecondPage from "../components/SecondPage";
import Thirdpage from "../components/Thirdpage";
import Forthpage from "../components/Forthpage";
import FifthPage from "../components/FifthPage";
import SixthPage from "../components/SixthPage";
import Navbar from "../components/navbar";
export default function Home() {

  return(    
    <>
    <div className="Container">
      <Navbar />
      <FirstPage />
      <SecondPage />
      <Thirdpage />
      <Forthpage />
      <FifthPage />
      <SixthPage />
    </div>
      </>
  )
}