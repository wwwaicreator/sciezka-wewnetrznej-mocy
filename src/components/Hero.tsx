import { motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nContext';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./images/ewa7.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118]/70 via-[#0a0118]/50 to-[#0a0118]" />

      {/* Aurora effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] orb bg-mystic-700/20 animate-float-slow" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] orb bg-rose-500/10 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] orb bg-mystic-500/15 animate-float-fast" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block border border-mystic-500/40 bg-mystic-900/30 backdrop-blur-sm text-mystic-300 rounded-full px-5 py-1.5 text-sm font-sans tracking-widest uppercase mb-8">
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-mystic-500 via-rose-400 to-gold-400 animate-pulse-glow" style={{ padding: '3px' }}>
              <div className="w-full h-full rounded-full bg-[#0a0118]" />
            </div>
            <div className="relative rounded-full overflow-hidden border-2 border-mystic-500/50"
              style={{ width: '180px', height: '180px' }}>
              <img
                src="./images/ewa1.jpg"
                alt="Ewa Zduńska"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Sparkle decorations */}
            <div className="absolute -top-2 -right-2 text-gold-400 text-xl animate-float">✦</div>
            <div className="absolute -bottom-2 -left-2 text-mystic-400 text-sm animate-float-slow">✦</div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-5xl md:text-7xl font-light mb-3 tracking-wide text-shimmer"
        >
          {t.hero.name}
        </motion.h1>

        {/* Brand */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-serif text-xl md:text-2xl text-mystic-300 mb-6 italic tracking-wide"
        >
          {t.hero.brand}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="section-divider mb-6"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="font-serif text-2xl md:text-3xl text-white/90 mb-4 max-w-3xl mx-auto"
        >
          {t.hero.tagline}
        </motion.p>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-sans text-mystic-300 mb-10 max-w-xl mx-auto text-sm leading-relaxed"
        >
          {t.hero.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo('contact')}
            className="bg-gradient-to-r from-mystic-600 to-rose-600 hover:from-mystic-500 hover:to-rose-500 text-white px-8 py-3.5 rounded-full font-sans font-semibold transition-all shadow-xl shadow-mystic-900/60 hover:shadow-mystic-600/40 hover:scale-105"
          >
            {t.hero.ctaPrimary}
          </button>
          <button
            onClick={() => scrollTo('mission')}
            className="border border-mystic-500/50 hover:border-mystic-400 text-mystic-300 hover:text-white px-8 py-3.5 rounded-full font-sans font-semibold transition-all backdrop-blur-sm hover:bg-mystic-900/30 hover:scale-105"
          >
            {t.hero.ctaSecondary}
          </button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mystic-500"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-mystic-500 animate-pulse" />
        <span className="text-xs font-sans tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
