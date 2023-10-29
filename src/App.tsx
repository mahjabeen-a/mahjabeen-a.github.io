import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import BlogContentPage from "./pages/BlogContentPage";
import BlogPage from "./pages/BlogPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/blogs" element={<BlogPage />} ></Route>
        <Route path="/content" element={<BlogContentPage />} ></Route>
        <Route path="*" element={<ErrorPage />} ></Route>
      </Routes>
    </>
  );
}

export default App;