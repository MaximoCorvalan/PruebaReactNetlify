import { useState } from "react";
import "../Banner/Banner.css";

import EmpanadaMalbec from "../../Resources/EmpanadaMalbec.jpeg"
import EmpanadaChesse from "../../Resources/EmpanadaChesse.jpeg"
import PizzaPeperoni from "../../Resources/PizzaPeperoni.jpeg"
import PizzaMorron from "../../Resources/PizzaMorron.jpeg"
import PizzaMuzarela from "../../Resources/PizzaMuzzarela.jpeg"
import PizzaFugazzeta from "../../Resources/PizzaFugazzeta.jpeg"


export const Banner = () => {
 
  const [banner] = useState([EmpanadaMalbec, EmpanadaChesse, PizzaPeperoni, PizzaMorron, PizzaMuzarela, PizzaFugazzeta]);


  // Autoplay
 

  return (
    <div className="banner-wrapper">

    <div className="banner-track">
        {/* duplico el array para que el scroll sea infinito sin cortes */}
        {banner.concat(banner).map((src, index) => (
          <img
            key={index}
            src={src}
            className="banner-img"
            alt={`banner-${index}`}
          />
        ))}
      </div>
  
    </div>
  );
};
