import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter ,faInstagram , faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <>
            <div id='header' className="items-center py-4 px-6 md:px-10 lg:px-20">

                <div id='leftheader'>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faPhone} className='w-5 h-5 mr-2 md:mr-4'/>
                        <p className="text-xs md:text-base">(414) 857 - 0107</p>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 md:ml-6">
                        <FontAwesomeIcon icon={faEnvelope} className='w-5 h-5 mr-2 md:mr-4' />
                        <p className="text-xs md:text-base">yummy@bistrobliss</p>
                    </div>
                </div>

                <div id='rightheader' className="flex items-center">
                    <FontAwesomeIcon icon={faFacebook} className='w-5 h-5 mr-2 md:mr-4'/>
                    <FontAwesomeIcon icon={faInstagram} className='w-5 h-5 mr-2 md:mr-4'/>
                    <FontAwesomeIcon icon={faTwitter} className='w-5 h-5 mr-2 md:mr-4'/>
                    <FontAwesomeIcon icon={faGithub} className='w-5 h-5 mr-2 md:mr-4'/>
                </div>

            </div>
        </>
    )
}