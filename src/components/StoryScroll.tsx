import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/css/storyscroll.css";

gsap.registerPlugin(ScrollTrigger);

const StoryScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".story-section");

    gsap.to(sections, {
      yPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        start: "top top",
        end: "+=" + window.innerHeight * (sections.length - 1),
      },
    });
  }, []);

  return (
    <div  className="story-container">
      <section className="story-section">
        <h2>¿No sabes qué necesitas?</h2>
        <p>No te preocupes, aquí va una guía rápida.</p>
      </section>

      <section className="story-section">
        <h2>¿Quieres que tu negocio venda más?</h2>
        <p>→ Necesitas marketing (o magia negra, pero la primera opción es legal).</p>
      </section>

      <section className="story-section">
        <h2>¿Quieres anuncios que hagan que la gente diga "¡Wow!"?</h2>
        <p>→ Eso es publicidad.</p>
        <img src="https://via.placeholder.com/300" alt="Ejemplo publicidad" />
      </section>

      <section className="story-section">
        <h2>¿Tu logo parece hecho en Paint?</h2>
        <p>→ Llamemos a diseño antes de que sea demasiado tarde.</p>
        <video autoPlay loop muted>
          <source src="tu-video.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="story-section">
        <h2>📌 Ahora ya lo sabes.</h2>
        <p>Elige sabiamente o deja que lo hagamos por ti. Porque, sinceramente, somos buenos en esto. 😏</p>
      </section>
    </div>
  );
};

export default StoryScroll;
