import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full mix-blend-normal">
      <nav
        ref={navRef}
        className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex items-center justify-between px-6 py-3 rounded-large border w-full max-w-6xl ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-border shadow-sm'
            : 'bg-background border-transparent'
        }`}
      >
        <div className="flex-shrink-0">
          <span className="font-sans font-bold text-xl tracking-tight text-primary-text">Operzy</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {['About', 'How It Works', 'What You Get', 'Who It’s For', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-secondary-text hover:text-primary-text text-sm font-medium link-hover"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex-shrink-0">
          <a
            href="#book"
            className="group btn-magnetic px-5 py-2.5 bg-accent-green rounded-xl text-primary-text font-semibold text-sm hover:!text-primary-text"
          >
            <span className="relative z-10 transition-colors duration-300">Book a Call</span>
            <span className="btn-mask group-hover:bg-accent-hover rounded-xl"></span>
          </a>
        </div>
      </nav>
    </div>
  );
}
