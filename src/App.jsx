import { useState } from "react";
import "./App.css";

function App() {
  const [usuario, setUsuario] = useState("");
  const [contrasenia, setContrasenia] = useState("holis123");
  const [nombreCompleto, setNombreCompleto] = useState("");

  const handleChange = (e) => {
    setUsuario(e.target.value);
  };

  const handleClick = () => {
    setNombreCompleto(usuario);
    alert(`Usuario: ${usuario}\nContraseña: ${contrasenia}`);
  };

  return (
    <>
      <div className="frase1">
        <h1>Bienvenido {usuario}</h1>
      </div>
      <div className="container">
        <input type="text" onChange={handleChange} />
        <input type="password" name="contrasenia" />
        <button onClick={handleClick}>Entrar</button>
      </div>
      <div className="frase2">
        <p>Bienvenido {nombreCompleto} a nuestro sitio web!</p>
      </div>
    </>
  );
}

export default App;
