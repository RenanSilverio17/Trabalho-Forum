import { BolaColorida } from "../bola-colorida/bola-colorida.component"
import "./notificacao-balao.style.css"

export function NotificacaoBalao({mensagem, cor}) {

    return (
        <section className="notificacao-container">
            <div className="notificacao-mensagem">
            <BolaColorida cor={cor}/>
            {mensagem}
            </div>
        </section>
    )

}