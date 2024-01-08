import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Counter from './components/Counter.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    
      <div className='maincontainer'>
        <Header/>
        <Counter/>
        <Footer/>

       </div>
      
   
  )
}

export default App
