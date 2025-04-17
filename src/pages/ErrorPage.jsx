import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const ErrorPage = () => {

    const navigate = useNavigate()


    const handlePrevious = () => {
        navigate(-1);
    }


    return <div className="error">
        <h1>Pagina non Trovata</h1>
        <button><Link to="/">Torna alla Home</Link></button>
        <button onClick={handlePrevious}>Torna alla Pagina Precedente</button>
    </div>
}


export default ErrorPage;