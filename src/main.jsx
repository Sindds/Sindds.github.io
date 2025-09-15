import './components/loader.js'
import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { Page } from './configs/page.config.js'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <main className='min-h-screen'>
        <Routes>
          <Route path={Page.HOME} element={<Home />} />
          <Route path={Page.ABOUT} element={<About />} />
          <Route path={Page.PORTFOLIO} element={<Portfolio />} />
          <Route path={Page.CONTACTS} element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </Router>
  </StrictMode>,
)
