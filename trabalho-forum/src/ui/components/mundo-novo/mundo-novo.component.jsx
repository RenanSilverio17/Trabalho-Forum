import "./mundo-novo.style.css";
import icone from "../../../assets/planeta-terra.svg";

export function MundoNovo() {
  return (
    <div className="mundo-novo">
      <h1>Mundo Novo</h1>
      <img src={icone} alt="Titulo Mundo Novo com imagem da Terra" />
    </div>
  );
}
