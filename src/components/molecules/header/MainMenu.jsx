import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { deletToken, token } from "../../../helpers/auth";

const MainMenu = () => {
  const nav = useNavigate();
  const { userData, setUserData } = useContext(UserContext)
  // console.log(userData)
  const handleSession = () => {
    deletToken();
    nav("/");
    setUserData()
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

        <li className="flex items-center">
          <Link className="menu-item" to="/carrito">
            Carrito
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
            <>
              {userData?.is_admin && (
                <li className="flex items-center">
                  <Link className="menu-item" to="/admin/productos">
                    Administrar productos
                  </Link>
                </li>
              )}
              <li className="flex items-center">
                <a
                  href=""
                  className="menu-item cursor-pointer"
                  onClick={handleSession}
                >
                  Cerrar sesion
                </a>
              </li>
            </>
          )
        }
      </ul>
    </nav>
  );
}

export default MainMenu;
