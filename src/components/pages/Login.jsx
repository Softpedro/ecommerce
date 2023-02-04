import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../constants/env";
import { UserContext } from "../../context/UserContext";
import { setToken } from "../../helpers/auth";
import LoginTemplate from "../templates/LoginTemplate";

function Login() {
  const nav = useNavigate();
  const [error, setError] = useState();
  const { setUserData } = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    setError()
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    axios
      .post(`${API_URL}/public/login`, data)
      .then((resp) => {
        setToken(resp.data.data.token)
        setUserData(resp.data.data.user)
        nav("/")
      })
      .catch((err) => {
        setError(err)
      });
  };
  return (
    <LoginTemplate title="Iniciar Sesion">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            name="email"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="text-center pt-1 mb-12 pb-1">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" type="submit">
            Ingresar
          </button>
          <Link className="text-blue-500 hover:text-blue-800 mt-1 block" to="/registro">
            ¿Deseas registrarte?
          </Link>
        </div>
        {error && (
          <p className="text-center p-2 bg-red-100 text-red-800">
            {error?.response?.data?.data}
          </p>
        )}
      </form>
    </LoginTemplate>
  );
}

export default Login;
