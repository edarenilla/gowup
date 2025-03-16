import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "../../assets/css/sidebar.css";

function Sidebar() {
  const menuRef = useRef<HTMLElement | null>(null);
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const socialMenuRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (!menuRef.current) return;

    gsap.fromTo(
      menuRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      [...menuItemsRef.current.filter((el): el is HTMLLIElement => el !== null),
      ...socialMenuRef.current.filter((el): el is HTMLLIElement => el !== null)],
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, stagger: 0.2, duration: 1, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <nav className="sidebar" ref={menuRef}>
      <ul className="menu-list">
        {["Portafolio", "Acerca de nosotros", "Servicios", "Contacto"].map((item, index) => (
          <li key={index} ref={(el) => { menuItemsRef.current[index] = el; }}>
            <Link to={`/${item.toLowerCase().replace(/\s+/g, "")}`}>{item}</Link>
          </li>
        ))}
      </ul>

      {/* Menú de redes sociales en la parte inferior */}
      <ul className="social-menu">
        {[
          { name: "Instagram", link: "https://www.instagram.com" },
          { name: "LinkedIn", link: "https://www.linkedin.com" },
          { name: "WhatsApp", link: "https://wa.me/+573158391821" }
        ].map((item, index) => (
          <li key={index} ref={(el) => { socialMenuRef.current[index] = el; }}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;

