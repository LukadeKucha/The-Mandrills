import React from "react"


const Navbar = () => {
  return (    
    <div className="navbar-wrapper">        
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="#welcome">
                      <img src="/logo.png"></img>
                    </a>
                </div>
                <div className="navbar-menu">                
                    <ul>                            
                       <li><a href="#The Mandrills">The mandrills</a> </li>                                  
                       <li><a href="#Roadmap">Roadmap</a></li>      
                       <li><a href="#Community">Community</a> </li>      
                       <li><a href="#FAQ">FAQ</a></li>                                                     
                    </ul>                   
                </div> 
            </div>
        </div>
  )}

export default Navbar
