
import "../Footer/Footer.css"
import FondoLocal from "../../Resources/Logo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer>
        <div className="Footer__map" id="Contact">
             <h2>Encontranos | Take Away</h2>
       
           <iframe className="Footer__Iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6178.048969387498!2d-58.83956692629531!3d-34.453719750845195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9d00672a6485%3A0xc39831e2dfdd71a0!2sMam%C3%A1%20Clara!5e0!3m2!1ses!2sar!4v1765229939676!5m2!1ses!2sar"  loading="lazy" ></iframe>
        </div>

        <div className="Footer_Logo">
          <img src={FondoLocal}></img>
        
           <h3>LUNES A SABADOS DE 11 A 15hs Y DE 19 A 23hs -
DOMINGO 19 a 23hs</h3>
        </div>

        <div className="Footer__Contact">
  <h4>Contacto</h4>

 

  <div className="Contact_item">
    <FontAwesomeIcon icon={faWhatsapp} />
    <span> +54 11 3011-2155</span>
  </div>


  <div className="Contact_item" >
    <FontAwesomeIcon icon={faInstagram} />
<a href="https://www.instagram.com/mamaclara.pilar/" className="Link">
    <span>@mamaclara.pilar</span>
</a>
  </div>

  <div className="Contact_item">
    <FontAwesomeIcon icon={faLocationDot} />
    <span>Saraví 2155, La Lonja - Pilar</span>
  </div>
</div>

     
    </footer>
    
  )
}
