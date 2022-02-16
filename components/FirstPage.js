import { BsDiscord } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
const FirstPage = () => {
    return(
        <div className="firstpage-container" id = 'home'>
           <div className="h-text">
               <p>
                   Welcome to The Mandrills
               </p>
           </div>
           <div className="home-links">
                    <a href="#home">
                        <BsDiscord />                        
                    </a>
                    <a href="https://twitter.com/TheMAndrillsWN?t=cCblJhVkddwLIllEwH9QsQ&s=09">
                      <BsTwitter />
                    </a>
                </div>
        </div>
    )
   
}
export default FirstPage