import "./balao-esquerda.style.css"

export function BalaoEsquerda({mensagem}) {

    return (
        <div className="balao-esquerda">
            <p>{mensagem}</p>
        </div>
    )

}