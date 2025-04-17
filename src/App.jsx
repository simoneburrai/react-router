import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Chisiamo from "./pages/Chisiamo"
import PostList from "./pages/PostList"
import Post from "./pages/Post"
import DefaultLayout from "./layouts/DefaultLayout"
import { useState } from "react";

function App() {
  const [post, setPost] = useState({});


  return <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/chi-siamo" element={<Chisiamo />} />
        <Route path="/posts" element={<PostList setPost={setPost} />} />
        <Route path="/posts/:id" element={<Post post={post} />} />
      </Route>

    </Routes>

  </BrowserRouter>
}

export default App
