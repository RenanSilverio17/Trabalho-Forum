import { Link } from "react-router-dom";
import { SecaoMenu } from "../../components/secao-menu/secao-menu.component";
import { SecaoNoticias } from "../../components/secao-noticias/secao-noticias.component";
import { SecaoPostagens } from "../../components/secao-postagens/secao-postagens.component";
import "./feed.style.css";
import { useEffect, useState } from "react";

export function FeedScreen() {
  const [postagens, setPostagens] = useState([]);

  useEffect(() => {
    if (!postagens.length && JSON.parse(localStorage.getItem("postagens"))) {
      setPostagens(JSON.parse(localStorage.getItem("postagens")));
    }
  }, [postagens.length]);

  function addPost(conteudo) {
    const postagensNew = [
      ...postagens,
      {
        id: Date.now(),
        conteudo: conteudo,
        comentarios: [],
        likes: 0,
        user: localStorage.getItem("user"),
      },
    ];
    setPostagens(postagensNew);

    localStorage.setItem("postagens", JSON.stringify(postagens));
  }

  return (
    <section className="feed">
      <SecaoMenu>
        <ul>
          <li>
            <button>Feed</button>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
          <li>
            <Link to="/notificacoes">Notificações</Link>
          </li>
          <li>
            <Link to="/sair">Sair</Link>
          </li>
        </ul>
        <button className="menu-botao">Postar</button>
      </SecaoMenu>
      <SecaoPostagens addPost={addPost} postagens={postagens} />
      <SecaoNoticias />
    </section>
  );
}
