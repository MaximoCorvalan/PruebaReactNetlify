
import '../Header/Header.css'
import logo from "../../Resources/Logo.jpg"
export const Header = () => {

  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};


  return (
    <header>
      <div className='contLogo'>
         <img className='logo' alt='img' src={logo}></img>

      </div>

      <div className='HeaderList'>
        <ul>
          <li onClick={()=>scrollToSection("AboutUs")} >
    
   
               NOSOTROS
 
       
          </li>
           <li onClick={()=>scrollToSection("PediYa")}>
                 

            PEDI YA
            
           </li>

            <li  onClick={()=>scrollToSection("Contact")}>
          

               CONTACTO
      
           </li>
        </ul>
      </div>

    </header>
  )
}
