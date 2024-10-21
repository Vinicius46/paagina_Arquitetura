import { useContext } from 'react'
import AboutText from '../../components/AboutText/AboutText'
import Banner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

// CONTEXT
import { AppContext } from '../../contexts/AppContext'

export default function About(){
    const appContext = useContext(AppContext)
    return (
        <>
            <Header/>
            <Banner title={appContext.languages[appContext.language].menu.about} image="about.png"/>
            <div className="container">
               <AboutText/>
            </div>
            <Footer/>
        </>
    )
}