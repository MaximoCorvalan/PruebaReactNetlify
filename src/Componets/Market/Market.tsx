
import { useState } from "react"
import "../Market/Market.css"
import { CardProduct } from "../Card/CardProduct"
import { useMamaClara } from "../../Context/ContextMamaClara"
export const Market = () => {

    const [elements]=useState(["Pizza","Empanadas"])
      const [active,SetActive]=useState("Pizzas")
      const Context = useMamaClara()
  return (
    <div className="ContMarket" id="PediYa">

        <h1 className="title_Market">PEDI YA</h1>
         
        <div className="Market__Submenu">
          <h3>Eligí tu preferido:</h3>
           <ul className="Market__Submenu_Items ">
            <li  className={active=="Pizzas"?"Active":""} onClick={()=>SetActive("Pizzas")} >{elements[0]}</li>
            <li className={active=="Empanadas"?"Active":""} onClick={()=>SetActive("Empanadas")} >{elements[1]}</li>
           </ul>
            
        </div>

          <div className="contProduct">
            <div className="ConteinerProducts">

               <CardProduct></CardProduct>  <CardProduct></CardProduct>  <CardProduct></CardProduct>  <CardProduct></CardProduct>  <CardProduct></CardProduct>  <CardProduct></CardProduct>  <CardProduct></CardProduct>  <CardProduct></CardProduct>  <CardProduct></CardProduct>
            </div>
          </div>

          <div className="Continue">
       

             <button className="btnContinuar">
               <span>Continuar</span>
              </button>
      
               <p>TOTAL: {Context.precioTotal}$</p>
 
        

     
          </div>

      


    </div>
  )
}
