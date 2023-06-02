import './Footer.css'

import Logo from '../../images/logo.png'
import { AiFillInstagram, AiFillFacebook, AiFillMail } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footerContainer'>
                <div className='footerSectionImage'>
                    <img src={Logo}/>
                </div>
                <hr className='footerHr'/>
                <div className='footerSection'>
                    <p className='footerSectionTitle'>Políticas</p>
                    <NavLink to='/privacity' className='footerSectionLink'>Políticas de privacidad</NavLink>
                    <NavLink to='/cookies' className='footerSectionLink'>Políticas de cookies</NavLink>
                </div>
                <hr className='footerHr'/>
                <div className='footerSection'>
                    <p className='footerSectionTitle'>Redes</p>
                    <div className='footerSectionIcons'>
                        <AiFillInstagram className='footerSectionIcon'/>
                        <AiFillFacebook className='footerSectionIcon'/>
                        <AiFillMail className='footerSectionIcon'/>
                    </div>
                </div>
            </div>
        </footer>
    )
}