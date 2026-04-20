"use client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Dossier from "@/pages/Dossier";
import Legal from "@/pages/Legal";
import Resistance from "@/pages/Resistance";
import Act from "@/pages/Act";

export default function ClientApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dossier" element={<Dossier />} />
          <Route path="legal" element={<Legal />} />
          <Route path="resistance" element={<Resistance />} />
          <Route path="act" element={<Act />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
