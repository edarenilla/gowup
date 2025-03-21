
import useAlturaReal from "../hook/UseAlturaReal";

const PantallaCompleta = () => {
  const alturaReal = useAlturaReal();

  return (
    <div
      style={{
        height: `${alturaReal}px`,
        backgroundColor: "lightblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1>Altura dinámica: {alturaReal}px</h1>
    </div>
  );
};

export default PantallaCompleta;
