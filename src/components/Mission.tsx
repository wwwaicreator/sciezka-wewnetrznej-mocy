import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '../i18n/I18nContext';

export default function Mission() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.7, delay: i * 0.15 },
    }),
  };

  return (
    <section id="mission" className="relative py-28 px-6 overflow-hidden">
      {/* Subtle bg gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mystic-950/30 to-transparent pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section title */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-mystic-400 mb-3 block">
            ✦ &nbsp; ✦ &nbsp; ✦
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-4">
            {t.mission.title}
          </h2>
          <div className="section-divider mb-10" />
        </motion.div>

        {/* Photo alongside text */}
        <div className="grid md:grid-cols-2 gap-10 items-center text-left mb-12">
          {/* Image */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-mystic-700/30 shadow-2xl shadow-mystic-950/60">
              <img
                src="./images/ewa2.jpg"
                alt="Ewa Zduńska"
                className="w-full h-80 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118]/60 to-transparent rounded-2xl" />
            </div>
            {/* Decorative corner glow */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 orb bg-mystic-600/30 animate-float-slow" />
          </motion.div>

          {/* Text */}
          <div className="space-y-4 font-sans text-mystic-200 leading-relaxed">
            {[t.mission.p1, t.mission.p2, t.mission.p3, t.mission.p4, t.mission.p5].map((p, i) => (
              <motion.p
                key={i}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="text-base"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Quote */}
        <motion.blockquote
          custom={7}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative glass rounded-2xl px-8 py-6 max-w-2xl mx-auto"
        >
          <div className="text-4xl text-mystic-500/50 font-serif leading-none absolute -top-3 left-6">"</div>
          <p className="font-serif text-xl italic text-white/90 leading-relaxed">
            {t.mission.quote}
          </p>
          <div className="text-4xl text-mystic-500/50 font-serif leading-none absolute -bottom-3 right-6">"</div>
        </motion.blockquote>
      </div>
    </section>
  );
}
