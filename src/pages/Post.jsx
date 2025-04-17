import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

function Post() {

    const [post, setPost] = useState({});
    const [dots, setDots] = useState(".");
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(false);
    let { id } = useParams();
    id = parseInt(id);
    const apiUrlPost = `${apiUrl}/${id}`;
    const previousId = ((id - 1) <= 0) ? id : (id - 1);
    const nextId = (id + 1);
    useEffect(() => {
        setLoading(true);
        const interval = setInterval(() => {
            setDots(prev => prev + ".")
        }, 200)
        axios.get(apiUrlPost)
            .then(res => {
                setPost(res.data);
            })
            .catch(() => setErr(true))
            .finally(() => {
                setLoading(false);
                clearInterval(interval);
                setDots(".")
            })
    }, [id])

    if (err) {
        return <ErrorPage />
    }

    if (loading) {

        let charging = "caricamento in corso";
        return <div className="loading">{charging}{dots}</div>
    }

    return <main className="post-page">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button><Link to={`/posts/${previousId}`}>Post Precedente</Link></button>
        <button><Link to={`/posts/${nextId}`}>Post Successivo</Link></button>
    </main>
}

export default Post;