import { useContext } from 'react'
import { Link } from 'react-router-dom'


// ASSETS
import './Footer.css'
import Brasilicon from '../../assets/logosSvg/basil-icon.svg'
import  UsaIcon from '../../assets/logosSvg/eua-icon.svg'
import FacebookIcon from  '../../assets/logosSvg/facebook-icon.svg'
import InstagranIcon from '../../assets/logosSvg/instagran-icon.svg'
import LinkedinIcon from '../../assets/logosSvg/linkedin-icon.svg'
import LogoDnc from '../../assets/logosSvg/logoDnc.svg'
import TwitterIcon from  '../../assets/logosSvg/twitter-icon.svg'

// COMPONENTS
import Button from '../Button/Button'

// CONTEXT
import { AppContext } from '../../contexts/AppContext'


export default function Footer() {
    const appContext = useContext(AppContext)
    const changeLanguage = (contry) => {
        appContext.setLanguage(contry)
    }
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                         
                         <p className="gray-1-color">{appContext.languages[appContext.language].general.footerLogoText}</p>
                         <div className="d-flex social-links">
                            <a href="https://www.google.com.br/?hl=pt-BR" target="_blank">
                                <img src={FacebookIcon}/>
                            </a>
                            <a href="https://www.google.com.br/?hl=pt-BR" target="_blank">
                                <img src={TwitterIcon}/>
                            </a>
                            <a href="https://www.google.com.br/?hl=pt-BR" target="_blank">
                                <img src={LinkedinIcon}/>
                            </a>
                            <a href="https://www.google.com.br/?hl=pt-BR" target="_blank">
                                <img src={InstagranIcon}/>
                            </a>
                         </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                            <div className="footer-col">
                                <h3>{appContext.languages[appContext.language].general.pages}</h3>
                                <ul>
                                    <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                    <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                    <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                    <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h3>{appContext.languages[appContext.language].general.contact}</h3>
                                <p className="gray-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                                <p className="gray-1-color">suporte@escoladnc.com.br</p>
                                <p className="gray-1-color">(19) 99187-4342</p>
                            </div>
                         </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                            <p className="gray-1-color"> Copyright © DNC - 2024</p>
                            <div className="langs-area d-flex">
                                <Button buttonStyle ="unstyled" onClick={() => changeLanguage('br')}>
                                    <img src={Brasilicon} height="29px"/>
                                </Button>

                                <Button buttonStyle ="unstyled" onClick={() => changeLanguage('en')}>
                                    <img src={UsaIcon} height="29px"/> 
                                </Button>
                            </div>
                         </div>
            </div>
        </footer>
    )
}