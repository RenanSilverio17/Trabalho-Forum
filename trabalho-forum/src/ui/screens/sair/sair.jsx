import { Link } from "react-router-dom";
import mundo from "../../../assets/planeta-terra.svg";
import linha from "../../../assets/linha.png"
import "./sair.css";
import semFoto from "../../../assets/SemFoto.png"

export function Sair() {
  return (
    <>
      <div className="tudo">
        <div className="sair-container">
          <div className="sair-sidebar">
            <div className="sair-title">
              Mundo Novo
              <img src={mundo} alt="image" className="sair-image" />
            </div>
            <div className="sair-options">

            </div>
          </div>
          
             <div className="sair-main-content">
              
            <div className="sair-content">
              <div className="sair-inside">
                <img src={semFoto} alt="icone" className="sair-icon" />
                <p>@eduardaramos___</p>
                <p> Deseja sair mesmo?</p>
                <div className="sair-gap">
                  <Link to="/sign-in" className="sair-buttons">
                    Sair
                  </Link>
                </div>
                <Link to="/feed" className="sair-buttons">
                  Cancelar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
