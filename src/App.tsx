import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Disposable from "./disposable";
import Aquze from "./aquez";
import Footer from "./Footer";

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={Disposable()}/>
    <Route path="/aqua" element={Aquze()}/>
    </Routes>
  </BrowserRouter>
  <Footer />
    </>
}

export default App;
