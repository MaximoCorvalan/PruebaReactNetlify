
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


    <Header></Header>
    <Banner></Banner>
    <AboutUs></AboutUs>
    <Market></Market>
    <Footer></Footer>

   <a href="https://wa.me/541130112155" target="_blank">

        <img src={Whassap}  className='whassapIcon' alt="LogoWhassao" />
     </a>

   </ProviderMamaClara>

     
  
    </>
  )
}

export default App
