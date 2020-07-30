import React from "react";
import useActive from "../hooks/useActive";
import Tittle from "../components/Tilttle/Tittle";

const Test = () => {
  return (
    <div>
      <h1>Tienes que activar tu cuenta</h1>
      <Tittle>
        <h2>Antes de empezar, necesitamos que actives tu cuenta!</h2>
      </Tittle>

      <h4>sajdaksjd:console.warn();</h4>
      <p>
        Te damos la bienvenidad a la App, ahora nos toca cuidar de tu salud.
      </p>
      <h5>Enviamos un correo con el código de activación de tu cuenta.</h5>
      <a onClick={handleSendEmail}>No recibiste el código, enviar nuevamente</a>
      <form className="mt-4" onSubmit={handleSubmit}>
        <IconForm
          type="number"
          iconClass="fas fa-ticket-alt"
          placeholder="Código"
          max="99999"
          onChange={(event) => setCode(event.target.value)}
        />
        <input onChange={(event) => setCode(event.target.value)}></input>
        <button className="btn btn-primary btn-block">Activar cuenta</button>
      </form>
    </div>
  );
};

export default Test;
