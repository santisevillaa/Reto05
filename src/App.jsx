import { useState } from "react";
import "./App.css";

function App() {
  const [usuario, setUsuario] = useState("");
  const [contrasenia, setContrasenia] = useState("holis123");
  const [inputContrasenia, setInputContrasenia] = useState("");
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleChangeUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const handleChangeContrasenia = (e) => {
    setInputContrasenia(e.target.value);
  };

  const handleClick = () => {
    if (inputContrasenia === contrasenia) {
      setNombreCompleto(usuario);
      setMostrarMensaje(true);
    } else {
      setMostrarMensaje(false);
      alert("Contraseña incorrecta");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <>
      <div className="divContainer">
        <div className="frase1">
          <h1>Hola: {usuario}</h1>
        </div>
        <div className="container">
          <input
            type="text"
            placeholder="Usuario"
            onChange={handleChangeUsuario}
          />
          <input
            type="password"
            name="contrasenia"
            placeholder="Contraseña"
            onChange={handleChangeContrasenia}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleClick}>Entrar</button>
        </div>
        <div className="frase2">
          {mostrarMensaje && (
            <p>Bienvenido {nombreCompleto} a nuestro sitio web!</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
