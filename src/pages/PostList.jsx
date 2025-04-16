import axios from "axios";
import { useEffect, useState } from "react";

const apiUrl = "";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get
    }, [])


    return <main id="posts">Lista dei post</main>
}

export default PostList;