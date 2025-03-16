import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/css/portfolio.css";

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Colombia Homestays",
      description:
        "The 4th Accouter Annual launched between two flaming torches framing the entrance of the Rolls-Royce showroom at 15 Berkeley Square, Mayfair.",
      imageUrl: "https://www.kin.design/_images/agilita/agilita-cover.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Diseño Exclusivo",
      description:
        "El 4º Accouter Annual se lanzó entre dos antorchas encendidas que enmarcaban la entrada de la sala de exposición de Rolls-Royce en 15 Berkeley Square, Mayfair.",
      imageUrl: "https://www.kin.design/_images/halcyon/halcyon-3.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Innovación Visual",
      description:
        "Gentrificando, la belleza de la tecnología y la arquitectura, trae consecuencias y oportunidades. Siempre hay un emprendedor hábil que sabe aprovecharlas.",
      imageUrl: "https://www.kin.design/_images/agilita/agilita-cover.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Proyecto Vida",
      description:
        "Un sitio web sencillo y cargado de ilusión para los beneficiarios. Una asociación que todavía cree en la humanidad.",
      imageUrl: "https://www.kin.design/_images/mantle/mantle-11.jpg",
      link: "#",
    },
  ];

  const rowsRef = useRef([]);

  useLayoutEffect(() => {
    const elements = rowsRef.current.filter(Boolean);
    if (elements.length === 0) return;

    elements.forEach((row) => {
      const text = row.querySelector(".portfolio-text");
      const image = row.querySelector(".portfolio-image-img");

      if (!text || !image) return;

      gsap.set(text, { opacity: 0, y: 50 });
      gsap.set(image, { opacity: 0, x: 600 });

      gsap.to(text, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: row,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none", // Solo se anima una vez
          
        },
      });

      gsap.to(image, {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          markers: true,
          trigger: row,
          start: "center 80%",
          end: "center 50%",
          toggleActions: "play none none none", // Solo se anima una vez
          scrub:1,
        },
      });
    });
  }, []);

  return (
    <section className="portfolio-section">
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => {
            rowsRef.current[index] = el;
          }}
          className="portfolio-item"
        >
          <div className="portfolio-text">
            <p>{project.title}</p>
            <h2>{project.description}</h2>
            <a href={project.link} className="portfolio-button">
              View Project
            </a>
          </div>
          <div className="portfolio-image">
            <img className="portfolio-image-img" src={project.imageUrl} alt={project.title} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Portfolio;

