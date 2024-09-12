import { useState } from "react";
import "./App.css";

function App() {
  const [usuario, setUsuario] = useState("");
  const [contrasenia, setContrasenia] = useState("hola123");
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
    if (usuario.length == "") {
      alert("Ingrese un nombre de usuario");
    } else if (inputContrasenia == "") {
      alert("Ingrese una contraseña");
    } else if (inputContrasenia === contrasenia) {
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
        <div className="divLogin">
          <h2>Ingrese sesión</h2>
        </div>
        <div className="frase1">{usuario && <h1>Hola, {usuario}!</h1>}</div>
        <div className="container">
          <input
            type="text"
            name="usuario"
            placeholder="Usuario"
            onChange={handleChangeUsuario}
          />
          <input
            type="password"
            name="contrasenia"
            placeholder="Contraseña"
            onChange={handleChangeContrasenia}
            onKeyUp={handleKeyDown}
          />
          <button onClick={handleClick}>Entrar</button>
        </div>
        <br />
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
