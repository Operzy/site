import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Thesis from './components/Thesis';
import Capabilities from './components/Capabilities';
import ServicesOverview from './components/ServicesOverview';
import Architecture from './components/Architecture';
import Engagement from './components/Engagement';
import Results from './components/Results';
import Governance from './components/Governance';
import Team from './components/Team';
import Contact from './components/Contact';
import AiAudit from './components/AiAudit';
import ServicePage from './components/ServicePage';
import Industries from './components/Industries';
import IndustryPage from './components/IndustryPage';
import Book from './components/Book';
import Footer from './components/Footer';

function Home() {
  return (
    <main>
      <Hero />
      <Thesis />
      <Capabilities />
      <ServicesOverview />
      <Architecture />
      <Engagement />
      <Results />
      <Governance />
      <Contact />
    </main>
  );
}

function TeamPage() {
  return (
    <main className="pt-[72px]">
      <Team />
      <Contact />
    </main>
  );
}

function AiAuditPage() {
  return (
    <main className="pt-[72px]">
      <AiAudit />
    </main>
  );
}

function ServiceDetailPage() {
  return (
    <main className="pt-[72px]">
      <ServicePage />
    </main>
  );
}

function IndustriesPage() {
  return (
    <main className="pt-[72px]">
      <Industries />
    </main>
  );
}

function IndustryDetailPage() {
  return (
    <main className="pt-[72px]">
      <IndustryPage />
    </main>
  );
}

function BookPage() {
  return (
    <main className="pt-[72px]">
      <Book />
    </main>
  );
}

/** Route changes should land at the top of the new page, not mid-scroll. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-canvas">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/ai-audit" element={<AiAuditPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:slug" element={<IndustryDetailPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
