import "./secao-notificacoes.style.css"
import { BolaColorida } from "../bola-colorida/bola-colorida.component"
import { NotificacaoBalao } from "../notificacao-balao/notificacao-balao.component"

export function SecaoNotificacoes() {
    return (
        <section className="secao-notificacoes">
                <header>
                    Notificações
                </header>
                <section className="lista-notificacoes">
                    <NotificacaoBalao mensagem={"Alguém precisa de ajuda?"} cor={"vermelho"}/>
                    <NotificacaoBalao mensagem={"Qual o tema do técnico?"} cor={"rosa"}/>
                    <NotificacaoBalao mensagem={"To desesperado"} cor={"verde"}/>
                    <NotificacaoBalao mensagem={"Preciso de ajuda"} cor={"amarelo"}/>
                </section>
            </section>
    )
}