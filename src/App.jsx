import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Chisiamo from "./pages/Chisiamo"
import PostList from "./pages/PostList"
import DefaultLayout from "./layouts/DefaultLayout"

function App() {

  return <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/chi-siamo" element={<Chisiamo />} />
        <Route path="/posts" element={<PostList />} />
      </Route>

    </Routes>

  </BrowserRouter>
}

export default App
