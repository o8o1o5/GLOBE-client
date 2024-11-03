import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageHome from "./pages/PageHome/PageHome";
import PagePost from "./pages/PagePost/PagePost";
import Topbar from "./components/Topbar";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col items-center">
      <Topbar></Topbar>
      <Router>
        <Routes>
          <Route path="/" element={<PageHome></PageHome>}></Route>
          <Route path="/post" element={<PagePost></PagePost>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
