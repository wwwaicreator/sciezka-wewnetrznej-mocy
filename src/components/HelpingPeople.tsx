import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '../i18n/I18nContext';

export default function HelpingPeople() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="people" className="relative py-28 px-6 overflow-hidden">
      {/* Background strip */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#12032a]/60 to-transparent pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-mystic-400 mb-3 block">
            ✦ &nbsp; ✦ &nbsp; ✦
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-4">
            {t.people.title}
          </h2>
          <div className="section-divider mb-6" />
          <p className="font-sans text-mystic-300 max-w-xl mx-auto">
            {t.people.subtitle}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.people.categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 cursor-default group transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              {/* Title */}
              <h3 className="font-serif text-xl text-white mb-3 group-hover:text-mystic-300 transition-colors">
                {cat.title}
              </h3>
              {/* Items */}
              <ul className="space-y-1.5">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm font-sans text-mystic-300">
                    <span className="text-mystic-500 mt-0.5 flex-shrink-0">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-mystic-600 to-rose-600 hover:from-mystic-500 hover:to-rose-500 text-white px-8 py-3.5 rounded-full font-sans font-semibold transition-all shadow-xl shadow-mystic-900/50 hover:scale-105"
          >
            {t.nav.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
