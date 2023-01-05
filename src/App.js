import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About/About'
import Investments from './pages/Investments/Investments'
import Careers from './pages/Careers/Careers'
import Media from './pages/Media/Media'
import Contact from './pages/Contact/Contact'
import Services from "./pages/Services/Services"
import JoinFleet from './pages/JoinFleet/JoinFleet'
import GuidVessels from './pages/GuidVessels/GuidVessels'
import { useState } from "react"
import Login from "./components/Login/Login"
import './index.css'
import Footer from "./components/Footer/Footer"
import Captain from "./pages/Captain/Captain"
import Status from "./pages/Status/Status"
import BeOneOfUs from "./pages/BeOneOfUs/BeOneOfUs"
import { useTranslation } from 'react-i18next';
import './font/KUFISTANDARDGK.TTF'


function App() {

  const [openLogin, setOpenLogin] = useState(false)
  const [loggedin, setLoggedin]= useState(false)
  const [t, i18next] = useTranslation()
  const [lang, setLang]= useState('en')
  
  
  return (
    <>
      <BrowserRouter>
        <Navbar lang={lang}  setLang={setLang} loggedin={loggedin} setOpenLogin={setOpenLogin} />
        {openLogin && <Login setLoggedin={setLoggedin} setOpenLogin={setOpenLogin} />}
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path={'/about'} element={<About lang={lang} />} />
          <Route path={'/services'}  element={<Services lang={lang} />} />
          <Route path={'/investments'}  element={<Investments lang={lang} />} />
          <Route path={'/careers'}  element={<Careers lang={lang}/>} />
          <Route path={'/contact'}  element={<Contact lang={lang} />} />
          <Route path={'/media'}  element={<Media lang={lang}/>} />
          <Route path="/captain" element={<Captain lang={lang} />} />
          <Route path="/status" element={<Status lang={lang} />} />
          <Route path="/beoneofus" element={<BeOneOfUs lang={lang} />} />
          <Route path="/guidvessels" element={<GuidVessels lang={lang} />} />
          <Route path="/joinourfleet" element={<JoinFleet lang={lang} />} />


          
        </Routes>
        <Footer lang={lang} />
      </BrowserRouter>
    </>
  );
}

export default App;
