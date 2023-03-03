import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthStore, useForm } from "../../hooks";
import "./login.css";

const registerFormFields = {
  name: "",
  email: "",
  password: "",
  password2: "",
  role: "",
};

export const RegisterPage = () => {
  const { startRegister, errorMessage } = useAuthStore();
  const { name, email, password, password2, role, onInputChange } =
    useForm(registerFormFields);

  const registerSubmit = (event) => {
    event.preventDefault();
    if (password !== password2) {
      Swal.fire("Error en registro", "Password debe ser igual", "error");
      return;
    }
    startRegister({
      name: name,
      email: email,
      password: password,
      password2,
      role: role,
    });
  };
  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autentificación", errorMessage, "error");
    }
  }, [errorMessage]);
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={registerSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="name"
                value={name}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
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
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="password2"
                value={password2}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Role: operario"
                name="role"
                value={role}
                onChange={onInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
              <Link className="text-end" to="/auth/login">
                Volver al login
              </Link>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
