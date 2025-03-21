import { useState, useEffect } from "react";

function useAlturaReal() {
  const [altura, setAltura] = useState(window.innerHeight);

  useEffect(() => {
    const actualizarAltura = () => setAltura(window.innerHeight);

    window.addEventListener("resize", actualizarAltura);
    window.addEventListener("orientationchange", actualizarAltura);

    actualizarAltura(); // Ajustar al inicio

    return () => {
      window.removeEventListener("resize", actualizarAltura);
      window.removeEventListener("orientationchange", actualizarAltura);
    };
  }, []);

  return altura;
}

export default useAlturaReal;
