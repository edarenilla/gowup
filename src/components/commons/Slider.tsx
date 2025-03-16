import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import dataSlider from "../../data/dataSlider";
import "../../assets/css/slider.css";
import { LiaArrowRightSolid } from "react-icons/lia";
import { LiaArrowLeftSolid } from "react-icons/lia";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const progressBarRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const intervalRef = useRef(null); // Aquí definimos intervalRef

  useEffect(() => {
    // Reiniciar animación antes de cambiar el slide
    gsap.fromTo(
      [textRef.current, imageRef.current],
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Animar la barra de progreso
    gsap.to(progressBarRef.current, {
      width: `${((currentIndex + 1) / dataSlider.length) * 100}%`,
      duration: 5,
      ease: "power3.out",
    });

    return () => clearInterval(intervalRef.current); // Limpiar el intervalo cuando el componente se desmonte
  }, [currentIndex]);

  // Configurar el auto-slide cada 5 segundos
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(intervalRef.current); // Limpiar el intervalo cuando el componente se desmonte
  }, [currentIndex]);

  const nextSlide = () => {
    gsap.to([textRef.current, imageRef.current], {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === dataSlider.length - 1 ? 0 : prevIndex + 1
        );
      },
    });
  };

  const prevSlide = () => {
    gsap.to([textRef.current, imageRef.current], {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? dataSlider.length - 1 : prevIndex - 1
        );
      },
    });
  };

  return (
    <div className="slider-container">


      {/* Contenido del slider */}
      <div className="slider">
        <div className="slider-image">
          <img ref={imageRef} src={dataSlider[currentIndex].image} alt="Slide" />
        </div>
        <div className="slider-content">
          <h2>¿No sabes qué necesitas?</h2>
          
          <h3>No te preocupes, aquí va una guía rápida</h3>
          <div className="slider--content--p">
            <p className="text-highlight" ref={textRef}>{dataSlider[currentIndex].text}</p>
          </div>
          <div className="enlace--botton">

          <a className="hero--empezar--gratis" href="#">Empezar gratis</a>
          <div className="slider-buttons">
            <div></div>
            <button 
              onClick={prevSlide} 
              disabled={currentIndex === 0}
              className={currentIndex === 0 ? "disabled" : ""}
            >
              <LiaArrowLeftSolid  size={30} />
            </button>
            <button 
              onClick={nextSlide} 
              disabled={currentIndex === dataSlider.length - 1}
              className={currentIndex === dataSlider.length - 1 ? "disabled" : ""}>
               <LiaArrowRightSolid  size={30}/>
            </button>
          </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default Slider;
