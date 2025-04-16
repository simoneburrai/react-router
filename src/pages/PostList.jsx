import axios from "axios";
import { useEffect, useState } from "react";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get(apiUrl)
            .then(res => setPosts(res.data))
    }, [])

    console.log(posts)



    return <main id="posts">
        <h2>Lista dei Post</h2>
        <div className="posts-container">
            {posts.map(post => {
                return <div className="post" id={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>

            })}
        </div>
    </main>
}

export default PostList;