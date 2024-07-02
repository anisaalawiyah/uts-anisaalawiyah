import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
