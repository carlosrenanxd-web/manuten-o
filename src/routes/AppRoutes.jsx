import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import LayoutPages from "../Layout/LayoutPages"

import ScrollToTop from "./ScrollToTop";

import Home from "../pages/Home";
import ServicoHidraulica from "../pages/servicos/ServicoHidraulica";
import ServicoEletrica from "../pages/servicos/ServicoEletrica";
import ServicoPintura from "../pages/servicos/ServicoPintura";
import ServicoManutencao from "../pages/servicos/ServicoManutencao";



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<LayoutPages />}>
          <Route path="/servicos/hidraulica" element={<ServicoHidraulica />} />
          <Route path="/servicos/eletrica" element={<ServicoEletrica />} />
          <Route path="/servicos/pintura" element={<ServicoPintura />} />
          <Route path="/servicos/manutencao" element={<ServicoManutencao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
