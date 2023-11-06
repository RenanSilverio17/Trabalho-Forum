import { MundoNovo } from "../mundo-novo/mundo-novo.component"
import "./secao-menu.style.css"

export function SecaoMenu({children}) {

    return (
        <section className="menu-esquerda">
            <MundoNovo/>
            {children}
        </section>
    )

}