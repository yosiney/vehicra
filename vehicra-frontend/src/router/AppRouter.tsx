// src/router/AppRouter.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CarsCatalogPage from "../pages/CarsCatalogPage";
import CarDetailPage from "../pages/CarDetailPage";
import ContactPage from "../pages/ContactPage";
import ClientHistoryPage from "../pages/ClientHistoryPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/autos" element={<CarsCatalogPage />} />
          <Route path="/autos/:id" element={<CarDetailPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/mi-historial" element={<ClientHistoryPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;