import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Chisiamo from "./pages/Chisiamo"
import PostList from "./pages/PostList"
import Post from "./pages/Post"
import DefaultLayout from "./layouts/DefaultLayout"
import ErrorPage from "./pages/ErrorPage";

function App() {

  return <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/chi-siamo" element={<Chisiamo />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<Post />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>

  </BrowserRouter>
}

export default App
