import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const i = setInterval(() => setPulse(p => !p), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <footer className="bg-white pt-20 pb-8 px-6 lg:px-12 border-t border-border rounded-t-[4rem] relative overflow-hidden mt-[-4rem] z-20 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          <div className="col-span-1 md:col-span-2">
            <div className="font-sans font-bold text-2xl text-primary-text mb-4">Operzy</div>
            <p className="text-secondary-text max-w-sm">
              AI-Native Operating Systems for Agencies.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-primary-text mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'How It Works', 'What You Get', 'Who It’s For', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-secondary-text hover:text-primary-text text-sm transition-colors font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-primary-text mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-secondary-text hover:text-primary-text text-sm transition-colors font-medium">LinkedIn</a>
              </li>
              <li>
                <a href="mailto:hello@operzy.com" className="text-secondary-text hover:text-primary-text text-sm transition-colors font-medium">Email</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-secondary-text mb-4 md:mb-0">
            © Operzy. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-xs font-mono text-secondary-text bg-alternate-background px-4 py-2 rounded-full border border-border">
            <div className={`w-2 h-2 rounded-full bg-accent-green ${pulse ? 'opacity-100' : 'opacity-40'} transition-opacity duration-500`}></div>
            <span>System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
