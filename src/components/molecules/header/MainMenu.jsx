import { Link } from "react-router-dom"

function MainMenu() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/productos">Productos</Link>
                </li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
        </nav>
    </div>
  )
}

export default MainMenu