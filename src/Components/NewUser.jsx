import React, { useState } from "react";
import * as validate from "../js/Validate";
import { Link } from "react-router-dom";

export default function NewUser() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");

  const [passwordError, setPasswordError] = useState("");

  const [Ok, setOk] = useState(false);

  const [name, setName] = useState("");

  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    fetch("http://localhost:8020/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, address, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((e) => {});
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Nombre</h3>

      <input type="text" onChange={(e) => setName(e.target.value)} required />

      <h3>Correo electronico</h3>

      <input
        type="text"
        name="email"
        placeholder="Correo electronico"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />

      {emailError && <p className="error">Email incorrecto</p>}

      <h3>Contraseña</h3>

      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />

      {passwordError && <p className="error">Contraseña incorrecta</p>}

      <h3>Direccion</h3>

      <input
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      <button className="button">Crear usuario</button>
    </form>
  );
}
