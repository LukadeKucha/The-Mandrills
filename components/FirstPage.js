import { BsDiscord } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs'
const FirstPage = () => {
    return(
        <div className="firstpage-container" id = 'welcome'>
           <div className="h-text">
               <p>
                   Welcome to The Mandrills
               </p>
           </div>
           <div className="home-links">
                    <a href="https://discord.gg/tbsBgSct6K">
                        <BsDiscord />                        
                    </a>
                    <a href="https://twitter.com/TheMAndrillsWN?t=cCblJhVkddwLIllEwH9QsQ&s=09">
                      <BsTwitter />
                    </a>
                    <a href='https://www.instagram.com/the_mandrilas/'>
                        <BsInstagram />
                    </a>
                </div>
        </div>
    )
   
}
export default FirstPage