import React from "react"
const Navbar = () => {
  return (    
    <div className="navbar-wrapper">        
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">
                      <img src="/logo.png"></img>
                    </a>
                </div>
                <div className="navbar-text">
                  <p>WILD</p>
                  <a>NETWORK</a>
                </div>
                <div className="navbar-menu">                
                    <ul>                            
                       <li><a href="#Gallery">Gallery</a> </li>       
                       <li><a href="#Comin Soon">Coming Soon</a> </li>      
                       <li><a href="#The Mandrill">The Mandrill</a></li>      
                       <li><a href="#Game M The M">Game M The M</a> </li>      
                       <li><a href="#Minecraft">Minecraft</a></li>                             
                    </ul>                   
                </div> 
            </div>
        </div>
  )}

export default Navbar
