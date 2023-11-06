import { useEffect, useState } from "react";

import { perfil } from "../../../assets";

import "./perfil.style.css";
import { Link } from "react-router-dom";

export function PerfilScreen() {
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    if (!posts.length) {
      const postagens = JSON.parse(localStorage.getItem("postagens"))
        ?.filter((post) => post.user === localStorage.getItem("user"))
        .reverse();
      setPosts(postagens);
    }
  }, [posts.length]);
  

  return (
    <section className="perfil-sessao">
      <aside className="aside">
        <Link to="/feed">🠔 voltar</Link>
        <img src={perfil} alt="foto de perfil" />
        
        <p>@eduardaramos___</p>
       <div className="bio">
        <p>17 years, I am a happy person and I love ma fam and friends</p>
        </div>
        <span>{localStorage.getItem("user")}</span>
      </aside>
      <main className="main">
        {posts?.length
          ? posts.map((post) => (
              <div key={post.id} className="post">
                <span>{post.user}</span>
                <div className="texto">{post.conteudo}</div>
              </div>
            ))
            
          : "Sem posts"}
         </main>
    </section>
  );
}
