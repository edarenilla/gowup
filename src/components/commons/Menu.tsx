import Sidebar from "./Sidebar"
import "../../assets/css/menu.css"

export const Menu = () => {
  return (
    <section className="menu--section">
        <div className="menu--section--up">
        <button 
        className="menu-button-cerrar"
        onClick={() => window.history.back()}>CERRAR</button>
        </div>
        
        <Sidebar />
    </section>
    
  )
}