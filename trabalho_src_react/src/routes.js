import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Tela1 from "./pages/Tela1/index.js";
import Tela3 from "./pages/Tela3/index.js";
import Lista from "./pages/Lista/index.js";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tela1 />} />
        <Route path="/cadastro" element={<Tela3 />} />
        <Route path="/lista" element={<Lista />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;