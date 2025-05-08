
import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="py-6">
      <div className="winner-container flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#how-it-works" className="font-medium text-winner-green/90 hover:text-winner-green">How It Works</a>
          <a href="#demo" className="font-medium text-winner-green/90 hover:text-winner-green">Demo</a>
          <button className="btn-primary">Get Started</button>
        </nav>
        <button className="md:hidden btn-secondary py-2 px-4">Menu</button>
      </div>
    </header>
  );
};

export default Header;
