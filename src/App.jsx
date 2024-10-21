import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link  } from 'react-router-dom'

// PAGES
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import Projects from './assets/pages/Projects'
import Contact from './assets/pages/Contact'

// UTILS
 import ScrollToTop from './utils/ScrollTop'
import { AppContext } from './contexts/AppContext'

function App() {
  const appContext = useContext(AppContext)

    if (appContext.loading){
      return <LoadingSpinner/>
    }

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
  )
}

export default App