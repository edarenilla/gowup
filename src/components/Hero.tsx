import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./commons/Sidebar";
import "../assets/css/hero.css";
import "../index.css";
import logo from "../../public/images/logo-gowup.svg";
import grillo from "../../public/images/grillo.png";
import { BsArrowRight } from "react-icons/bs";
import SliderDatos from "./commons/SliderDatos";


const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!isOpen);
    navigate("/menu"); // Redirige a /menu
  };

  return (
    <section className="hero--section">
      <SliderDatos />
      <div className="section--hero--up">
          <button 
          className="menu-button"
          onClick={handleClick}
          >
            MENÚ
          </button>
      </div>

      <div className="section--hero--center">
        <div className="section--hero--center__img">
          <img src={grillo} alt="Grillo" />
        </div>
        <div className="section--hero--center__text">
        <img className="logo" src={logo} alt="Logo Gowup" />
          <p>
            Marketing que impacta, publicidad que seduce, diseño que deslumbra y un toque de psicología para meternos en la mente de tu audiencia.
          </p>
          <h4>Sincerely, We are good at this</h4>
        </div>
      </div>

      <div className="section--hero--down">
        <div className="section--hero--down--content">
        <small>© 2025 Gowup, Mpd.</small>
        <button className="cta-hero">
          <BsArrowRight size={25} />
        </button>
        </div>
      </div>
      <div className="section--sidebar">
      <Sidebar />
      </div>
    </section>
  );
};

export default Hero;
