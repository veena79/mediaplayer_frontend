
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'
import Watchinghistory from './pages/Watchinghistory'
import Header from './component/Header'
import Footer from './component/Footer'

function App() {
  

  return (
    <>
    <Header/>
      {/* slash represents baseurl */}
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watch-history' element={<Watchinghistory/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
