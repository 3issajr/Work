import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { faFacebook , faTwitter , faInstagram , faGithub, faGit } from '@fortawesome/free-brands-svg-icons'
import { faPhone , faEnvelope} from "@fortawesome/free-solid-svg-icons"


export default function Header(){
    interface IconMap {
        [key: string]: IconDefinition;
    }
    
    const icons: IconMap = {
        faPhone: faPhone,
        faEnvelope:faEnvelope,
        faFacebook:faFacebook,
        faInstagram:faInstagram,
        faTwitter:faTwitter,
        faGithub:faGithub
    };
return (  

        <div id="firstheader" className="row">

            <div id='header-left'>
                <FontAwesomeIcon icon={icons.faPhone} className='w-5 h-5' /> <p> (414) 857 - 057</p>
                <FontAwesomeIcon icon={icons.faEnvelope} className='w-5 h-5' /> <p> yummy@bistrobliss</p>
            </div>
            <div id='header-right'>
                <FontAwesomeIcon icon={icons.faFacebook} className='w-5 h-5'/>
                <FontAwesomeIcon icon={icons.faInstagram} className='w-5 h-5'/>
                <FontAwesomeIcon icon={icons.faTwitter} className='w-5 h-5'/>
                <FontAwesomeIcon icon={icons.faGithub} className='w-5 h-5'/>
            </div>

        </div>
)
}