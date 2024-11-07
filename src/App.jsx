import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageHome from "./pages/PageHome/PageHome";
import PagePost from "./pages/PagePost/PagePost";
import Nav from "./components/Nav/Nav";
import PageRegister from "./pages/PageRegister/PageRegister";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState({});

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      <Nav user={user}></Nav>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<PageHome setUser={setUser}></PageHome>}
          ></Route>
          <Route path="/post" element={<PagePost></PagePost>}></Route>
          <Route
            path="/register"
            element={<PageRegister></PageRegister>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
