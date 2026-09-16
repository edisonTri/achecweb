import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Actualidad from "./pages/Actualidad.jsx";
import FormacionAcademica from "./pages/FormacionAcademica.jsx";
import InstitucionalMinisterio from "./pages/InstitucionalMinisterio.jsx";
import Colabora from "./pages/Colabora.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App(){
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/actualidad" element={<Layout><Actualidad /></Layout>} />
        <Route path="/formacion" element={<Layout><FormacionAcademica /></Layout>} />
        <Route path="/institucional" element={<Layout><InstitucionalMinisterio /></Layout>} />
        <Route path="/colabora" element={<Layout><Colabora /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}
