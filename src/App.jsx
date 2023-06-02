import './App.css'

import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Portfolio/>
      <Form/>
      <Footer/>
    </div>
  )
}