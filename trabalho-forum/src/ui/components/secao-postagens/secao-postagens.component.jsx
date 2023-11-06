import "./secao-postagens.style.css";
import { BalaoDireita } from "../balao-direita/balao-direita.component";
import { BalaoEsquerda } from "../balao-esquerda/balao-esquerda.component";
import { BolaColorida } from "../bola-colorida/bola-colorida.component";
import { Postagem } from "../postagem/postagem.component";
import { useState } from "react";

const CORES = ["vermelho", "rosa", "amarelo", "verde"];

export function SecaoPostagens({ addPost, postagens }) {
  const [inputPostagem, setInputPostagem] = useState("");

  function handleChange({ target: { value } }) {
    setInputPostagem(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    addPost(inputPostagem);
  }

  return (
    <section className="postagens">
      <form onSubmit={handleSubmit}>
        <BolaColorida cor={"vermelho"} />
        <input
          type="text"
          name="postagem"
          value={inputPostagem}
          onChange={handleChange}
          placeholder="No que você está pensando?"
        />

        <button type="form">Enviar</button>
      </form>
      {postagens
        .reverse()
        .map(({ id, conteudo, comentarios, likes, user }, index) => (
          <Postagem key={id}>
            <section
              className={
                user === localStorage.getItem("user") ? "inverse" : "sessao"
              }
            >
              <BolaColorida cor={CORES[index % 4]} />
              {user === localStorage.getItem("user") ? (
                <BalaoDireita mensagem={conteudo} />
              ) : (
                <BalaoEsquerda mensagem={conteudo} />
              )}
            </section>
          </Postagem>
        ))}
    </section>
  );
}
