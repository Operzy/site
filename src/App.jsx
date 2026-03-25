import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProblemSection from './components/ProblemSection';
import BeliefShift from './components/BeliefShift';
import WhatOperzyIs from './components/WhatOperzyIs';
import OfferSection from './components/OfferSection';
import HowItWorks from './components/HowItWorks';
import SystemModules from './components/SystemModules';
import WhoThisIsFor from './components/WhoThisIsFor';
import Outcomes from './components/Outcomes';
import Guarantee from './components/Guarantee';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useLayoutEffect(() => {
    // Basic global scroll trigger refresh hook if needed
    const ctx = gsap.context(() => {});
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemSection />
      <BeliefShift />
      <WhatOperzyIs />
      <OfferSection />
      <HowItWorks />
      <SystemModules />
      <WhoThisIsFor />
      <Outcomes />
      <Guarantee />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
