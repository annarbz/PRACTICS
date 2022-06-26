import React from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Components/Header'
import { AppRoutes } from './AppRoutes'



function App() {
  return (
    <Router>


      <Header />
      <AppRoutes />
      <div className="footer">
        <div className="devby">
          <a href="https://vk.com/annarbz">developed by annarbz</a>
        </div>
      </div>







    </Router>
  )
}

export default App