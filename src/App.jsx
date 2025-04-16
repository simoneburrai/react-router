import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Chisiamo from "./pages/Chisiamo"
import PostList from "./pages/PostList"


function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/chi-siamo" element={<Chisiamo />} />
      <Route path="/posts" element={<PostList />} />
    </Routes>

  </BrowserRouter>
}

export default App
