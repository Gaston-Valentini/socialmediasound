import './Navbar.css'

import { Link } from 'react-scroll'

import Logo from '../../images/logo.png'
import { AiOutlineBars } from 'react-icons/ai'

export default function Navbar() {

    const onBars = () => {
        const navbar = document.querySelector('.navbarLinks')
        if (navbar.classList.contains('barsOnOff')) {
            navbar.classList.remove('barsOnOff')
        } else {
            navbar.classList.add('barsOnOff')
        }
    }

    return (
        <nav className="navbar">
            <div className="navbarImage">
                <img src={Logo}/>
            </div>
            <AiOutlineBars className='navbarBars' onClick={onBars}/>
            <div className='navbarLinks'>
                <Link className='navbarLinksLink' to='header' smooth={true} duration={1500} onClick={onBars}>Inicio</Link>
                <Link className='navbarLinksLink' to='services' smooth={true} duration={1500} onClick={onBars}>Servicios</Link>
                <Link className='navbarLinksLink' to='portfolio' smooth={true} duration={1500} onClick={onBars}>Portafolio</Link>
                <Link className='navbarLinksLink' to='contact' smooth={true} duration={1500} onClick={onBars}>Contacto</Link>
            </div>
        </nav>
    )
}