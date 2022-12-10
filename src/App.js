import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About/About'
import Investments from './pages/Investments/Investments'
import Careers from './pages/Careers/Careers'
import Media from './pages/Media/Media'
import Contact from './pages/Contact/Contact'
import Services from "./pages/Services/Services"
import { useState } from "react"
import Login from "./components/Login/Login"
import './index.css'
import Footer from "./components/Footer/Footer"
import Captain from "./pages/Captain/Captain"
import Status from "./pages/Status/Status"
import BeOneOfUs from "./pages/BeOneOfUs/BeOneOfUs"
import { useTranslation } from 'react-i18next';

function App() {

  const [openLogin, setOpenLogin] = useState(false)
  const [loggedin, setLoggedin]= useState(false)
  const [t, i18next] = useTranslation()
  const [lang, setLang]= useState('en')

  return (
    <>
      <BrowserRouter>
        <Navbar setLang={setLang} loggedin={loggedin} setOpenLogin={setOpenLogin} />
        {openLogin && <Login setLoggedin={setLoggedin} setOpenLogin={setOpenLogin} />}
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path={t('page1')} element={<About />} />
          <Route path={t('page2')}  element={<Services lang={lang} />} />
          <Route path={t('page3')}  element={<Investments />} />
          <Route path={t('page4')}  element={<Careers />} />
          <Route path={t('page5')}  element={<Contact />} />
          <Route path={t('page6')}  element={<Media />} />
          <Route path="/captain" element={<Captain />} />
          <Route path="/status" element={<Status />} />
          <Route path="/beoneofus" element={<BeOneOfUs />} />
          <Route path="/referabusiness" element={<BeOneOfUs />} />
          <Route path="/joinourfleet" element={<BeOneOfUs />} />


          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
