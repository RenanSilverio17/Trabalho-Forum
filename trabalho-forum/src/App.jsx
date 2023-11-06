import { imgBemVindo, imgCriarConta } from "./assets";

import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <main>
      <div id="coluna">
        <img id="criar" src={imgCriarConta} alt="criar conta" />
        <br />
        <br />
        <center>
          <input id="loginome" type="text" placeholder="Nome" />
        </center>
        <br />
        <br />
        <center>
          <input id="loginome" type="text" placeholder="Email" />
        </center>
        <br />
        <br />
        <center>
          <input id="loginome" type="password" placeholder="senha" />
        </center>
        <br />
        <br />
        <center>
          <input id="loginome" type="password" placeholder="Confirmar senha" />
        </center>
      </div>

      <div id="coluna2">
        <img id="bem-vindo" src={imgBemVindo} alt="seja bem vindo" />

        <Link to="/sign-in" id="botao">
          SIGN IN
        </Link>
      </div>
    </main>
  );
}

export default App;
