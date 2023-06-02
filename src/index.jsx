import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Privacity from './components/Politics/Privacity'
import Cookies from './components/Politics/Cookies'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/socialmediasound' element={<App/>}/>
            <Route path='/socialmediasound/privacity' element={<Privacity/>}/>
            <Route path='/socialmediasound/cookies' element={<Cookies/>}/>
        </Routes>
    </BrowserRouter>
)