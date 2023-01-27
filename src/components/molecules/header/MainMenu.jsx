import { Link, useNavigate } from "react-router-dom";
import { deletToken, token } from "../../../helpers/auth";

function MainMenu() {

  const nav = useNavigate();

  const handleSession = () => {
    deletToken();
    nav("/");
  }
  return (
    <nav className="w-full">
      <ul className="flex justify-end text-gray-100">
        <li className="flex items-center">
          <Link className="menu-item" to="/">
            Inicio
          </Link>
        </li>
        <li className="flex items-center">
          <Link className="menu-item" to="/productos">
            Productos
          </Link>
        </li>
        {
          !token() ? (
            <li className="flex items-center">
              <Link className="menu-item" to="/login">
                Iniciar Sesion
              </Link>
            </li>
          ) : (
            <li className="flex items-center">
              <a
                href=""
                className="menu-item cursor-pointer"
                onClick={handleSession}
              >
                Cerrar sesion
              </a>
            </li>
          )
        }
      </ul>
    </nav>
  );
}

export default MainMenu;
