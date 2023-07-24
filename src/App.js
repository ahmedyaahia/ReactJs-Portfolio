import React, { useEffect, useState } from 'react'

// libraries
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PropagateLoader } from 'react-spinners'


// components
import Home from './Home'
import Projects from './Projects'
import Navbarr from './Navbarr'

// style css
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'animate.css';

import "./App.css"

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000)

  }, [])

  return (
    <BrowserRouter>

      {
        loading ?
          <div className="preloaderr">
            <PropagateLoader color={'#f87765'}
              size={20}
              speedMultiplier={1} />
          </div> :
          <>
            <Navbarr />

            <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/Projects' element={<Projects />} />
            </Routes>
          </>
      }



    </BrowserRouter>
  )
}

export default App