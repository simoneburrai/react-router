import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

const PostList = ({ setPost }) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get(apiUrl)
            .then(res => setPosts(res.data))
    }, [])

    const HandleClick = (post) => {
        setPost(post);
    }



    return <main id="posts">
        <h2>Lista dei Post</h2>
        <div className="posts-container">
            {posts.map(post => {
                return <div className="post" key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <Link onClick={() => HandleClick(post)} to={`/posts/${post.id}`}>Link al Post</Link>
                </div>

            })}
        </div>
    </main>
}

export default PostList;