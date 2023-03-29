import logo from "./logo.svg";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element = {<Layout/>}></Route>
      <Route path="/" element = {<Home/>}></Route>
      <Route path="blog" element={<Blog />}></Route>
      <Route path="contact" element={<Contact/>}</Route>
      <Route path="*" element={<NoPage />}></Route>
    </Routes>
    </div>
  );
}

export default App;
