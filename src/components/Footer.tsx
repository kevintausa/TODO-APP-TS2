import './Footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
           <div><span >{2} <strong>tareas pendientes</strong> </span></div>
           <div><span className="todo-count"> All </span></div>
           <div><span className="todo-count">Activo</span></div>
           <div><span className="todo-count">Completado</span></div>
           <div> <button className="clear-completed">Borrar completados</button></div>
        </footer>
    )

}