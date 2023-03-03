import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthStore, useForm } from "../../hooks";
import "./login.css";

const loginFormFields = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { startLogin, errorMessage } = useAuthStore();
  const { email, password, onInputChange } = useForm(loginFormFields);

  //Funcion Submit
  const loginSubmit = (event) => {
    event.preventDefault();
    //console.log({ email, password });
    startLogin({ email: email, password: password });
  };

  //Error msj
  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autentificación", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={loginSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>

            <Link to="/auth/register">Crear una cuenta</Link>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
