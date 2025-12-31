import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import TestPrep from './pages/TestPrep';
import HighSchool from './pages/services/HighSchool';
import MiddleSchool from './pages/services/MiddleSchool';
import Elementary from './pages/services/Elementary';
import PreK from './pages/services/PreK';
import Homeschool from './pages/services/Homeschool';
import SpecialNeeds from './pages/services/SpecialNeeds';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="test-prep" element={<TestPrep />} />
          <Route path="services/high-school" element={<HighSchool />} />
          <Route path="services/middle-school" element={<MiddleSchool />} />
          <Route path="services/elementary" element={<Elementary />} />
          <Route path="services/prek" element={<PreK />} />
          <Route path="services/homeschool" element={<Homeschool />} />
          <Route path="services/special-needs" element={<SpecialNeeds />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
