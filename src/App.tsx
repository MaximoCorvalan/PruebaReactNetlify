
import './App.css'
import { Header } from './Componets/Header/Header'
import { Banner } from './Componets/Banner/Banner'
import { AboutUs } from './Componets/AboutUs/AboutUs'
import Whassap from "../src/Resources/whatsapp.png"
import { Market } from './Componets/Market/Market'
import { Footer } from './Componets/Footer/Footer'
import {ProviderMamaClara} from "./Context/ContextMamaClara"

function App() {


  return (
    <>
   
   <ProviderMamaClara>

<div className='OutBorder'></div>
    <Header></Header>
    <Banner></Banner>
    <AboutUs></AboutUs>
    <Market></Market>
    <Footer></Footer>

    <img src={Whassap} className='whassapIcon' alt="LogoWhassao" />

   </ProviderMamaClara>

     
  
    </>
  )
}

export default App
