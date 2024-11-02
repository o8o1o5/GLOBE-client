import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Topbar from "./components/Topbar";

export default function App() {
  return (
    <div className="flex flex-col items-center bg-slate-700">
      <Topbar></Topbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
