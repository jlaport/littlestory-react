import React, { useState } from "react";
import * as validate from "../js/Validate";
import { Link } from "react-router-dom";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");

  const [passwordError, setPasswordError] = useState("");

  const [Ok, setOk] = useState(false);

  const handleSubmit = (event) => {
    fetch("http://localhost:8020/users/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setUser(data);
        }
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
    event.preventDefault();
  };

  const validateSignIn = () => {
    validate.validateEmail(email) || validate.validatePassword(password)
      ? setOk(false)
      : setOk(true);
    userUpdate();
  };

  const userUpdate = () => {
    setPasswordError(validate.validatePassword(password));
    setEmailError(validate.validateEmail(email));
  };

  return (
    <div id="LoginContainer">
      <h2>Debe ingresar su usuario para finalizar la compra.</h2>

      <form onSubmit={handleSubmit}>
        <h3>Correo electronico</h3>

        <input
          type="text"
          name="email"
          placeholder="Correo electronico"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        {emailError && <p className="error">Email incorrecto</p>}

        <h3>Contraseña</h3>

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        {passwordError && <p className="error">Contraseña incorrecta</p>}

        <button className="button" onClick={() => validateSignIn()}>
          Ingresar
        </button>

        <Link to="/newuser">
          <button className="button" type="button">
            Nuevo usuario
          </button>
        </Link>
      </form>
    </div>
  );
}
