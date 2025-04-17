import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";


function Post() {
    const [post, setPost] = useState({});
    let { id } = useParams();
    id = parseInt(id);
    const apiUrlPost = `${apiUrl}/${id}`;
    const previousId = ((id - 1) <= 0) ? id : (id - 1);
    let nextId = (id + 1)

    useEffect(() => {
        axios.get(apiUrlPost)
            .then(res => setPost(res.data));
    }, [id])

    console.log("Questi son gli Id", previousId, nextId);


    return <div className="post-page">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button><Link to={`/posts/${previousId}`}>Post Precedente</Link></button>
        <button><Link to={`/posts/${nextId}`}>Post Successivo</Link></button>
    </div>
}

export default Post;