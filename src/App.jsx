import { BrowserRouter, Route, Routes } from "react-router-dom";

import FaqPage from "@/pages/Faq";
import LoginPage from "@/pages/Login";
import PricingPage from "@/pages/Pricing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PricingPage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
