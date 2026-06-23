import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../i18n/I18nContext';
import type { Lang } from '../i18n/I18nContext';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: t.nav.mission,  id: 'mission'  },
    { label: t.nav.people,   id: 'people'   },
    { label: t.nav.animals,  id: 'animals'  },
    { label: t.nav.about,    id: 'about'    },
    { label: t.nav.contact,  id: 'contact'  },
  ];

  const toggleLang = () => setLang(lang === 'pl' ? 'en' : 'pl' as Lang);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0118]/90 backdrop-blur-md shadow-2xl border-b border-mystic-800/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-serif font-medium tracking-wide"
        >
          <span className="text-shimmer">Ścieżka Wewnętrznej Mocy</span>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-mystic-300 hover:text-white transition-colors text-sm font-sans tracking-wide"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={toggleLang}
            className="text-xs font-sans font-semibold px-3 py-1 rounded-full border border-mystic-600/50 text-mystic-300 hover:text-white hover:border-mystic-400 transition-all"
          >
            {lang === 'pl' ? 'EN' : 'PL'}
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="bg-gradient-to-r from-mystic-600 to-rose-600 hover:from-mystic-500 hover:to-rose-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-mystic-900/50"
          >
            {t.nav.cta}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs font-sans font-semibold px-2 py-1 rounded-full border border-mystic-600/50 text-mystic-300"
          >
            {lang === 'pl' ? 'EN' : 'PL'}
          </button>
          <button
            className="text-mystic-300 text-xl p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0d0220]/95 backdrop-blur-md border-t border-mystic-800/30 px-6 py-4 flex flex-col gap-3"
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => { scrollTo(l.id); setOpen(false); }}
                className="text-mystic-300 hover:text-white transition-colors py-2 text-left font-sans text-sm tracking-wide border-b border-mystic-900/50"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => { scrollTo('contact'); setOpen(false); }}
              className="mt-2 bg-gradient-to-r from-mystic-600 to-rose-600 text-white py-2 rounded-full font-semibold text-sm"
            >
              {t.nav.cta}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
