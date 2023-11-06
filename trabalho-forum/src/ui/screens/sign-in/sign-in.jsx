import { Link, useNavigate } from "react-router-dom";
import { imgLogo } from "../../../assets";

import "./sign-in.css";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  function handleChange({ target: { value } }) {
    setEmail(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    localStorage.setItem("user", email);

    navigate("/feed");
  }
  return (
    <div className="background-blue">
      <div className="sign-Quadrado">
        <div className="sign-container">
          <header className="sign-header">
            <img src={imgLogo} alt="minhalogo" className="sign-logo" />
            <span>Bem vindo de volta</span>
          </header>

          <form onSubmit={handleSubmit}>
            <div className="sign-inputContainer">
              <label htmlFor="Email">E-mail</label>
              <input
                type="text"
                name="email"
                value={email}
                id="email"
                placeholder="02267074079@gmail.com"
                onChange={handleChange}
              />
            </div>

            <div className="sign-inputContainer">
              <label htmlFor="senha">Senha</label>
              <input
                type="senha"
                name="senha"
                id="senha"
                placeholder="********"
              />
            </div>

            <Link to="/">Não tenho conta</Link>

            <button type="submit" className="sign-button">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
