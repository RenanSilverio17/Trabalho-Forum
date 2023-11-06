import "./bola-colorida.style.css"

export function BolaColorida({cor}) {
    return (
        <div className="bola">
            <div className={cor}>
            </div>
        </div>
    )
}