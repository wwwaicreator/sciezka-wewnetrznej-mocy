import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '../i18n/I18nContext';

export default function HelpingAnimals() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="animals" className="relative py-28 px-6 overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden border border-mystic-700/30 shadow-2xl shadow-mystic-950/80">
              <img
                src="./images/molly.jpg"
                alt="Ewa i Molly"
                className="w-full h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118]/70 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-6 left-6">
                <span className="font-serif text-lg italic text-white/80">Ewa i Molly 🐾</span>
              </div>
            </div>
            {/* Decorative orbs */}
            <div className="absolute -top-8 -left-8 w-48 h-48 orb bg-rose-500/20 animate-float" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 orb bg-mystic-500/20 animate-float-slow" />
          </motion.div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="mb-8"
            >
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-rose-400 mb-3 block">
                🐾 &nbsp; 🌿 &nbsp; 🐾
              </span>
              <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-4">
                {t.animals.title}
              </h2>
              <div className="w-14 h-0.5 bg-gradient-to-r from-rose-500 to-transparent mb-6" />
              <p className="font-sans text-mystic-300 mb-3 leading-relaxed">
                {t.animals.subtitle}
              </p>
              <p className="font-sans text-mystic-400 text-sm leading-relaxed italic">
                {t.animals.intro}
              </p>
            </motion.div>

            {/* Items list */}
            <div className="space-y-3">
              {t.animals.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-3 glass glass-hover rounded-xl px-4 py-3 transition-all duration-300"
                >
                  <span className="text-rose-400 flex-shrink-0 mt-0.5">✦</span>
                  <span className="font-sans text-sm text-mystic-200 leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
