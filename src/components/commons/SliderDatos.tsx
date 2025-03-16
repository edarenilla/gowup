import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../assets/css/datosinteresantes.css";

const datosInteresantes = [
  "Los correos con líneas de asunto personalizadas tienen un 50% más de probabilidades de ser abiertos.",
  "Un consumidor necesita ver un anuncio al menos 7 veces para recordarlo (Regla de los 7 impactos).",
  "Más del 60% de las personas prefieren anuncios de marcas que cuentan una historia emocional.",
  "Google representa más del 92% de las búsquedas globales.",
  "El color aumenta el reconocimiento de marca en un 80%.",
  "Los usuarios pasan en promedio 54 segundos en una página antes de decidir si seguir explorando o salir.",
  "El 80% de los consumidores están dispuestos a pagar más por una mejor experiencia de usuario.",
  "TikTok Ads tienen una tasa de engagement 3 veces mayor que Facebook e Instagram.",
  "El 72% de los consumidores solo compran a marcas que ofrecen una experiencia personalizada.",
  "Usa la escasez: frases como '¡Últimas unidades!' generan urgencia.",
  "El efecto anclaje: si muestras primero un producto caro, el siguiente parecerá más barato.",
  "Los números impares se perciben como más creíbles, usa precios como $19.99 en lugar de $20.",
  "La prueba social funciona: 'Más de 10,000 clientes satisfechos' convence más que solo decir 'Somos buenos'.",
  "Dar algo gratis (un eBook, una muestra) aumenta la conversión.",
  "Reducir opciones evita la 'parálisis por análisis' y facilita la compra.",
  "Los clientes compran por emociones, no por lógica. Conecta emocionalmente con ellos.",
  "Un CTA con colores llamativos aumenta los clics hasta en un 30%.",
  "Usa la curiosidad en anuncios: 'Descubre el secreto detrás de…' funciona mejor que 'Compra nuestro producto'.",
  "Personalizar tus mensajes aumenta la conversión hasta un 25%.",
  "El 93% de los compradores basan su decisión de compra en la apariencia visual del producto.",
  "Amazon prueba más de 200 versiones de su página de inicio al año para optimizar conversiones.",
  "La palabra 'Gratis' activa las mismas áreas del cerebro que una recompensa o placer.",
  "Un video en una landing page aumenta la conversión hasta en un 80%.",
  "El color rojo genera urgencia y el azul transmite confianza.",
  "Coca-Cola es la segunda palabra más reconocida del mundo después de 'OK'.",
  "McDonald's usa el rojo y amarillo porque estimulan el hambre y la rapidez.",
  "Nike no paga publicidad en TV, pero usa influencers y redes sociales para vender.",
  "Apple usa embalajes minimalistas porque el cerebro asocia el diseño simple con calidad.",
  "Los logos famosos tienen entre 1 y 3 colores, porque la simplicidad es más memorable.",
  "El 33% de los compradores deciden si compran un producto solo por el diseño del empaque.",
  "El 80% de las personas solo leen los títulos y no el contenido completo.",
  "Los usuarios forman una primera impresión de tu web en 0.05 segundos.",
  "El 90% de la información transmitida al cerebro es visual.",
  "Las imágenes con rostros humanos aumentan el engagement en redes sociales en un 38%.",
  "Un diseño minimalista reduce la tasa de rebote en un 30%.",
  "Los botones grandes generan más clics que los pequeños.",
  "La tipografía y el espaciado afectan la legibilidad hasta en un 20%.",
  "Los sitios web con carga lenta pierden el 50% de los visitantes en los primeros 3 segundos.",
  "Los menús de navegación simples aumentan el tiempo de permanencia en la web.",
  "La IA ya personaliza anuncios en Google y redes sociales.",
  "El 82% de los consumidores confían más en marcas con experiencias interactivas.",
  "Los chatbots manejan más del 60% de las interacciones de atención al cliente.",
  "Los videos cortos en TikTok y Reels tienen una tasa de conversión del 80% más alta.",
  "El 92% de los clientes confía más en recomendaciones de personas que en publicidad.",
  "El marketing de voz (Alexa y Siri) crecerá un 30% en los próximos años.",
  "Más del 70% de las empresas invertirán en realidad aumentada para sus campañas.",
  "Los NFTs y el metaverso están siendo explorados como nuevas formas de publicidad.",
  "El contenido generado por el usuario (UGC) tiene un 28% más de credibilidad que el creado por marcas.",
  "Las empresas que usan storytelling venden un 22% más que las que solo presentan características del producto.",
  "El 90% de los usuarios deciden si confiar en una marca en los primeros 10 segundos de ver su página web.",
  "El cerebro humano procesa imágenes 60,000 veces más rápido que el texto.",
];

const SliderDatos = () => {
  const [index, setIndex] = useState(Math.floor(Math.random() * datosInteresantes.length));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(Math.floor(Math.random() * datosInteresantes.length));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="datos-interesantes">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="slider-item"
        >
          {datosInteresantes[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SliderDatos;

