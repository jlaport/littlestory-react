import React, { useState } from "react";
import * as validate from "../js/Validate";

export default function Checkout() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [Ok, setOk] = useState(false);

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
    <div id="checkOutContainer">
      <h2>Debe ingresar su usuario para finalizar la compra.</h2>

      <form>
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
        <br />

        {passwordError && <p className="error">Contraseña incorrecta</p>}

        <button
          className="button"
          type="button"
          onClick={() => validateSignIn()}
        >
          Finalizar compra
        </button>

        {Ok && (
          <p className="correct">Compra finalizada {email}. Muchas gracias!</p>
        )}
      </form>
    </div>
  );
}
