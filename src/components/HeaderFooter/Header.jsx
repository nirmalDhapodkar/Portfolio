import { useState } from 'react';
import './HeaderFooter.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 h-15 w-full shadow-lg shadow-[#09412b]">
      <div className="h-full w-full px-3 py-4 flex items-center justify-between font-mono bg-[#0d2733]/95">
        <h1 className="text-[#00E188] font-extrabold text-xl md:text-3xl">Portfolio</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block text-white">
          <ul className="flex space-x-6 text-lg font-medium">
            {['Home', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="nav-link hover:text-[#00E087] transition-colors duration-300 ease-in-out"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Icon - Mobile Only */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[95vw] h-[80vh] rounded-xl bg-[#344b3d]/60 backdrop-blur-[6px] outline-2 outline-gray-400/80 flex flex-col items-center justify-center space-y-8 text-white text-2xl font-semibold z-40">
          {['Home', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-[#00E087] transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
