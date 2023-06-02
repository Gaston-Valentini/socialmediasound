import './Header.css'

import { Link } from 'react-scroll'

import Logo from '../../Images/logo.png'

export default function Header() {
    return (
        <header id='header' className='header'>
            <div className='headerData'>
                <div className='headerDataImage'>
                    <img src={Logo} alt='logo'></img>
                </div>
                <p className='headerDataText'>Muéstranos tu video y dinos cómo te gustaría que suene</p>
                <p className='headerDataInfo'>Pide presupuesto sin compromiso, no vas a encontrar un precio mejor. Además, si nos gusta tu proyecto lo hacemos gratis, porque nos gusta participar y ayudar a que los buenos proyectos vean la luz.</p>
                <Link className='headerDataButton' to='contact' smooth={true} duration={1500}>Mejorar mi audio!</Link>
            </div>
        </header>
    )
}