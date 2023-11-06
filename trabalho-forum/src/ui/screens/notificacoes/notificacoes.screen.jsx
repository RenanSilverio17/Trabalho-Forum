import "./notificacoes.style.css";
import { SecaoMenu } from "../../components/secao-menu/secao-menu.component";
import { SecaoNoticias } from "../../components/secao-noticias/secao-noticias.component";
import { SecaoNotificacoes } from "../../components/secao-notificacoes/secao-notificacoes.component";
import { Link } from "react-router-dom";

export function NotificacoesScreen() {
  return (
    <section className="notificacoes">
      <SecaoMenu>
        <Link to="/feed" className="menu-botao">
          Voltar
        </Link>
      </SecaoMenu>
      <SecaoNotificacoes />
      <SecaoNoticias />
    </section>
  );
}
