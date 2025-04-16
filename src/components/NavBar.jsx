import { NavLink } from "react-router-dom"

function NavBar() {
    return <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/chi-siamo">Chi Siamo</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
        </ul>
    </nav>
}

export default NavBar;