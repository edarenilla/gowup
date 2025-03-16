import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

import StoryScroll from "./components/StoryScroll";
import { Menu } from "./components/commons/Menu";
function AnimatedRoutes() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    exit: { y: "-100vh", opacity: 0, transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 } },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero />} />
          <Route path="/quienes-somos" element={<About />} />
          <Route path="/portafolio" element={<Portfolio />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/inicio" element={<Hero />} />
          <Route path="/historia" element={<StoryScroll />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
