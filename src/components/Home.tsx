import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import "../assets/css/home.css";
import logo from "../../public/images/icon.svg";
import { BsArrowRight } from "react-icons/bs";

function Home() {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Animación de entrada
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  const handleNavigation = () => {
    // Animación de salida antes de cambiar de ruta
    gsap.to(containerRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.8,
      ease: "power3.in",
      onComplete: () => navigate("/historia"), // Cambia la ruta
    });
  };

  return (
    <div ref={containerRef} className="home-container">
      <img className="logo" src={logo} alt="gowup icon" />
      <div ref={textRef} className="home-text">
        <h3>¡Atención!</h3>
        <p>
          Aquí no vendemos fórmulas mágicas, hacks virales ni promesas vacías. No somos perfectos, cometemos errores pero los evitamos.
          ¿Resultados en 24 horas sin esfuerzo? Pura fantasía.
          ¿Millones de ventas con un solo anuncio? Ilusión barata.
          ¿Crecer en automático mientras duermes? Suerte con eso.
          Nosotros no hacemos humo, hacemos estrategia real.
          No seguimos tendencias pasajeras, creamos bases sólidas.
          No te prometemos éxito instantáneo, te damos el plan para construirlo y mantenerlo.
        </p>
        <p className="color-orange home--p__span">
          —Si buscas atajos, este no es tu lugar. <br />
          Si buscas crecimiento real, sostenible y con impacto, <br />
          bienvenido a Gowup.
        </p>

        <div className="home--buttons">
        <button className="cta-button--primary" onClick={handleNavigation}>
          Descubre cómo lo hacemos 
        </button>
        <button className="cta-button--complement" onClick={handleNavigation}>
           <BsArrowRight  size={30}/>
        </button>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
