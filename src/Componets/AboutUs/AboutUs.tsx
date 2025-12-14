
import Mp4 from "../../Resources/GiftEmpanadas.mp4";
import "../AboutUs/About.css";

export const AboutUs = () => (
  <div className="ContAbout" id="AboutUs">


    <div className="video-wrapper">
      <video
        src={Mp4}
        autoPlay
        muted
        loop
        playsInline
        className="about__video"
      ></video>
    </div>


    <div className="about__content">

        <div className="about__header">
          <h2>¿Quiénes somos?</h2>
          <p className="about__eyebrow">Pizzería de barrio</p>
        </div>
      <div className="contText">

    <p className="contText__p">
  Somos Mama Clara: una esquina encendida, un horno que late y una familia
  que eligió hacer pizza como se hacía antes, con paciencia, cariño y
  respeto por cada ingrediente. Nacimos chiquitos, casi tímidos, pero con
  una sola certeza: cuando se cocina con las manos, el corazón también
  amasa. Por eso nuestra masa descansa 24 horas, respira, crece y se
  convierte en ese borde aireado que ya es parte del barrio.
</p>

<p className="contText__p">
  Acá no existe el apuro: existe el ritual. Elegimos tomates dulces que
  perfuman la salsa, aceite de oliva que cuenta historias y quesos que se
  derriten como si estuvieran abrazando la masa. Cuando prendemos el horno
  a leña, el humo se mezcla con los recuerdos de la Nonna, con las charlas
  de sobremesa y con ese aroma que hace que más de uno frene en la vereda
  sin poder resistirse.
</p>

<p className="contText__p">
  No somos una cadena, ni buscamos serlo. Somos la pizzería donde te llaman
  por tu nombre, donde te guardan tu porción favorita y donde la pizza
  sale igual que la primera vez: honesta, generosa y con ganas de hacerte
  feliz. Si te vas con las manos llenas de harina, la panza calentita y
  la sonrisa llena de queso… entonces sabemos que hicimos lo correcto.
</p>

<ul className="about__list">
  <li>Masa madre cuidada como un integrante más de la familia.</li>
  <li>Fermentación lenta de 24 horas para lograr una pizza viva y ligera.</li>
  <li>Horno a leña que aporta ese ahumado que enamora desde la puerta.</li>
  <li>Ingredientes nobles, locales y seleccionados con amor.</li>
  <li>Recetas que combinan tradición, técnica y puro corazón.</li>
  <li>Un servicio de barrio: cercano, cálido y siempre con una sonrisa.</li>
</ul>

      </div>
    </div>



  </div>
);
