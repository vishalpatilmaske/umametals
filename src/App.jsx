import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import FacilitiesPage from './pages/FacilitiesPage';

import IndustrialComponentsPage from './pages/products/IndustrialComponentsPage';
import GymEquipmentPage from './pages/products/GymEquipmentPage';
import AluminiumProductsPage from './pages/products/AluminiumProductsPage';
import AutomationMachinePartsPage from './pages/products/AutomationMachinePartsPage';
import MetalSheetsComponentsPage from './pages/products/MetalSheetsComponentsPage';
import ToolsNutsBoltsPage from './pages/products/ToolsNutsBoltsPage';

import LaserCuttingCalculatorPage from './pages/calculator/LaserCuttingCalculatorPage';
import MetalWeightCalculatorPage from './pages/calculator/MetalWeightCalculatorPage';
import PipeWeightCalculatorPage from './pages/calculator/PipeWeightCalculatorPage';
import BendAllowanceCalculatorPage from './pages/calculator/BendAllowanceCalculatorPage';
import UnitConverterPage from './pages/calculator/UnitConverterPage';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />

            <Route path="products" element={<ProductsPage />} />
            <Route path="products/industrial-components" element={<IndustrialComponentsPage />} />
            <Route path="products/gym-equipment" element={<GymEquipmentPage />} />
            <Route path="products/aluminium-products" element={<AluminiumProductsPage />} />
            <Route path="products/automation-machine-parts" element={<AutomationMachinePartsPage />} />
            <Route path="products/metal-sheets-components" element={<MetalSheetsComponentsPage />} />
            <Route path="products/tools-nuts-bolts" element={<ToolsNutsBoltsPage />} />

            <Route path="calculator" element={<MetalWeightCalculatorPage />} />
            <Route path="calculators/laser-cutting-cost" element={<LaserCuttingCalculatorPage />} />
            <Route path="calculators/metal-weight" element={<MetalWeightCalculatorPage />} />
            <Route path="calculators/pipe-weight" element={<PipeWeightCalculatorPage />} />
            <Route path="calculators/bend-allowance" element={<BendAllowanceCalculatorPage />} />
            <Route path="calculators/unit-converter" element={<UnitConverterPage />} />

            <Route path="capabilities" element={<CapabilitiesPage />} />
            <Route path="facilities" element={<FacilitiesPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<ArticlePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}