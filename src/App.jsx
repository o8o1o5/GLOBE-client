import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageHome from "./pages/PageHome/PageHome";
import PagePost from "./pages/PagePost/PagePost";
import Nav from "./components/Nav/Nav";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      <Nav></Nav>
      <Router>
        <Routes>
          <Route path="/" element={<PageHome></PageHome>}></Route>
          <Route path="/post" element={<PagePost></PagePost>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
