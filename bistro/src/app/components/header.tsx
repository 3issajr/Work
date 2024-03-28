import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter ,faInstagram , faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    return(
        <>
        <div className="row">
            <div id='header' className="">
                <div id='leftheader'>
                   <FontAwesomeIcon icon={faPhone} className='w-5 h-5'/><p>(414) 857 - 0107</p>
                   <FontAwesomeIcon icon={faEnvelope} className='w-5 h-5'/> <p>yummy@bistrobliss</p>
                </div>
                <div id='rightheader'>
                    <FontAwesomeIcon icon={faFacebook} className='w-5 h-5'/>
                    <FontAwesomeIcon icon={faInstagram} className='w-5 h-5'/>
                    <FontAwesomeIcon icon={faTwitter} className='w-5 h-5'/>
                    <FontAwesomeIcon icon={faGithub} className='w-5 h-5'/>
                </div>

            </div>
        </div>
        </>
    )
}