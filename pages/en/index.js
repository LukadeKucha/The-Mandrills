import React from "react";
import FirstPage from "../../components/FirstPage";
import ThirdPage from "../../components/Thirdpage";
import SecondPage from "../../components/SecondPage";
import FourthPage from "../../components/FourthPage";
import Navbar from "../../components/Navbar";
export default function Home() {

  return(    
    <>
    <div className="Container">
      <div className="image">

      </div>
      <Navbar />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />  
    </div>
      </>
  )
}