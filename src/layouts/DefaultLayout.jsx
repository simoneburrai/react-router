import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const DefaultLayout = () => {
    return <>
        <header>
            <h1>React Router Project</h1>
            <NavBar />
        </header>
        <Outlet />
        <footer></footer>
    </>
}

export default DefaultLayout;