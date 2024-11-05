import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Disposable from "./disposable";
import Aquze from "./aquez";
import Footer from "./Footer";

function App() {
  return <>
  <HashRouter>
    <Routes>
      <Route path="/" element={Disposable()}/>
      <Route path="/aqua" element={Aquze()}/>
      </Routes>
  </HashRouter>
  <Footer />
    </>
}

export default App;
