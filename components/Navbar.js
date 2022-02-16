import React from "react"
import { BsDiscord } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';


const Navbar = () => {
  return (    
    <div className="navbar-wrapper">        
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="#home">
                        <BsDiscord />                        
                    </a>
                    <a href="https://twitter.com/TheMAndrillsWN?t=cCblJhVkddwLIllEwH9QsQ&s=09">
                      <BsTwitter />
                    </a>
                </div>
                <div className="navbar-menu">                
                    <ul>                            
                       <li><a href="#The Mendrills">The mendrills</a> </li>                                  
                       <li><a href="#Roadmap">Roadmap</a></li>      
                       <li><a href="#Community">Community</a> </li>      
                       <li><a href="#FAQ">FAQ</a></li>                                                     
                    </ul>                   
                </div> 
            </div>
        </div>
  )}

export default Navbar
