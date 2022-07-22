
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
//Css Social en Footer
import Footercss from "../components/Footer/Footer.css"



export default function Social () {
    return (
        <div className='social'>
        <h3><a href="https://twitter.com/lab_izerh"><FiTwitter /></a></h3>
        <h3><a href="https://www.instagram.com/lab_izerh/"><FiInstagram/></a></h3>
        <h3><a href="https://www.facebook.com/Laboratorio-IZERH-401101443657321/"><FiFacebook/></a></h3>
        </div>
        
        
    )
}

