import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/#about' },
  { name: 'Pricing', to: '/#pricing' },
  { name: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled || isOpen
          ? 'border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className='mx-auto max-w-6xl px-8 lg:px-16'>
        <div className='flex h-20 items-center justify-between'>
          <Link
            to='/'
            aria-label='MedQuel home'
            className='f-display text-lg tracking-tight text-white'
          >
            {/* logo / wordmark goes here */}
          </Link>

          <div className='hidden items-center gap-2 md:flex'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className='f-body rounded-full px-4 py-2 text-sm font-medium text-white/60 transition-colors hover:bg-[#C6F135]/10 hover:text-[#C6F135]'
              >
                {link.name}
              </Link>
            ))}

            <Link
              to='/premium'
              className='f-display ml-2 rounded-full bg-[#C6F135] px-5 py-2 text-xs tracking-wide text-black transition-colors hover:bg-[#d5fb5a]'
            >
              GO PREMIUM
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className='flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#C6F135] md:hidden'
            aria-label='Toggle menu'
            aria-expanded={isOpen}
          >
            {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='overflow-hidden border-b border-white/10 bg-[#0A0A0A]/95 backdrop-blur-md md:hidden'
          >
            <div className='flex flex-col gap-2 px-8 py-6'>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={handleLinkClick}
                  className='f-body rounded-full px-4 py-3 text-base font-medium text-white/60 transition-colors hover:bg-[#C6F135]/10 hover:text-[#C6F135]'
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to='/premium'
                onClick={handleLinkClick}
                className='f-display mt-2 rounded-full bg-[#C6F135] px-4 py-3 text-center text-sm tracking-wide text-black'
              >
                GO PREMIUM
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
