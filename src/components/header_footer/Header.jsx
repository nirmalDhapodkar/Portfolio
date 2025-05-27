import { useState } from 'react';
import './HeaderFooter.css';
import SocialTabs from '../utils/SocialTabs.jsx';
import SwitchDark from '../utils/SwitchDark.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleThemeToggle = (isDark) => {
    console.log('Theme switched to:', isDark ? 'Dark' : 'Light');
    // Optional: apply theme globally here if needed
  };

  return (
    <header className="fixed z-50 h-15 w-full shadow-lg shadow-[#09412b]">
      <div className="h-full w-full px-3 py-4 flex items-center justify-between font-mono bg-[#0d2733]/95">
        <h1 className="text-[#00E188] font-extrabold text-xl md:text-3xl">Portfolio</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-white">
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

          {/* SwitchDark Button for desktop */}
          <SwitchDark className='md:hidden' onToggle={handleThemeToggle} />
        </nav>

        {/* Hamburger Icon - Mobile Only */}
        <div className="md:hidden flex items-center gap-4">
          <SwitchDark onToggle={handleThemeToggle} />
          <button
            className="text-white text-3xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>

      </div>

      {/* Mobile Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[95vw] h-[80vh] rounded-xl bg-[#344b3d]/60 backdrop-blur-[6px] outline-2 outline-gray-400/80 text-white text-2xl font-semibold z-40">
          <div className='h-[85%] flex flex-col items-center justify-center space-y-8 '>
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
          <div className="md:hidden relative bottom-0 flex justify-center w-full">
            <div className="flex gap-6">
              <SocialTabs />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
