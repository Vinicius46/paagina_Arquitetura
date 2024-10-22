import { useContext } from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import Banner from '../../components/Banner/Banner'
import Header from "../../components/Header/Header"
import Footer  from "../../components/Footer/Footer"

// CONTEXT
import{ AppContext } from '../../contexts/AppContext'

export default function Contact() {
    const appContext = useContext(AppContext)
    return (
        <>
        <Header/>
        <Banner title={appContext.languages[appContext.language].menu.contact} image="contact.png"/>
        <div className='container'>
            <ContactForm/>
        </div>
        <Footer/>
        </>
    )
}