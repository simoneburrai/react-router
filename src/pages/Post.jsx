import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";


function Post() {
    let { id } = useParams();
    id = parseInt(id)
    console.log("L'id è", id)
    const [post, setPost] = useState({});
    useEffect(() => {
        axios.get(apiUrl)
            .then(res => {
                const posts = res.data;
                console.log(posts)
                setPost(posts.find(post => post.id === id));
            })
    }, [])

    console.log(post);


    return <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
}

export default Post;