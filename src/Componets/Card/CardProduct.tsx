import "../Card/CardProducts.css"
import PizzaFuga from "../../Resources/PizzaFugazzeta.jpeg"
import {   useState } from "react"
import { useMamaClara } from "../../Context/ContextMamaClara"

export const CardProduct = () => {

  const[cantidad,SetCantidad] = useState(0)
  const UseContext = useMamaClara()

    return (

       <div className="Product__Card">
       
            <img  className="imgCont" src={PizzaFuga}></img>

            <div className="Producto__Description">
              <h4 className="Producto__Name" >Pizza Peperoni</h4>
                <p>Oregano , queso muzzalera , pan rallado, tomates secos , mandarina</p>        
            </div>


            <div className="Producto__Market">

              <p className="Market__price">$8000</p>

       
               <div className="quantity">
  <button className="qty-btn" onClick={()=>
    {
      if(cantidad>0)
        {
          SetCantidad(cantidad-1)
             UseContext.setPrecio(UseContext.precioTotal - 8000)
        }
    }}>−</button>
  <span className="qty-number">{cantidad}</span>
  <button className="qty-btn" onClick={()=>{ 
    SetCantidad(cantidad+1)
    UseContext.setPrecio(UseContext.precioTotal + 8000)
    }}>+</button>
</div>


              
              
        
            </div>
       </div>

  )
}
