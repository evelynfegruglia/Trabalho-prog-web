import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Tela1 from "./pages/Tela1/index.js";
import Tela3 from "./pages/Tela3/index.js";
import Tela4 from "./pages/Tela4/index.js";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tela1 />} />
        <Route path="/tela3" element={<Tela3 />} />
        <Route path="/tela4" element={<Tela4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;