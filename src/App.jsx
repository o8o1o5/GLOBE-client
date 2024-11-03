import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Topbar from "./components/Topbar";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col items-center">
      <Topbar></Topbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
