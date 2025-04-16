import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const DefaultLayout = () => {
    return <>
        <header>
            <h1>React Router Project</h1>
            <NavBar />
        </header>
        <Outlet />
        <footer>
            <h3>Info Utili</h3>
            <ul className="links-footer">
                <li><a href="">Informazioni di Copyright </a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Termini e Condizioni</a></li>
                <li><a href="">Informazioni di Copyright</a></li>
                <li><a href="">Contatti</a></li>
                <li><a href="">FAQ</a></li>
            </ul>
        </footer>
    </>
}

export default DefaultLayout;