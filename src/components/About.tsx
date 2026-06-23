import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '../i18n/I18nContext';

export default function About() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.7, delay: i * 0.12 },
    }),
  };

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#12032a]/50 to-transparent pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-mystic-400 mb-3 block">
            ✦ &nbsp; ✦ &nbsp; ✦
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-4">
            {t.about.title}
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Images column */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-2 space-y-4"
          >
            <div className="rounded-2xl overflow-hidden border border-mystic-700/30 shadow-xl">
              <img
                src="./images/ewa1.jpg"
                alt="Ewa Zduńska"
                className="w-full h-72 object-cover object-top"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-mystic-700/20 shadow-lg">
                <img
                  src="./images/bg1.jpg"
                  alt=""
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-mystic-700/20 shadow-lg">
                <img
                  src="./images/bg2.jpg"
                  alt=""
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text + certs column */}
          <div className="lg:col-span-3 space-y-5">
            {[t.about.p1, t.about.p2, t.about.p3, t.about.p4].map((p, i) => (
              <motion.p
                key={i}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="font-sans text-mystic-200 leading-relaxed"
              >
                {p}
              </motion.p>
            ))}

            {/* Certificates */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="pt-4"
            >
              <h3 className="font-serif text-2xl text-white mb-4">
                {t.about.certTitle}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {t.about.certs.map((cert, i) => (
                  <div
                    key={i}
                    className="glass glass-hover rounded-xl px-4 py-3 flex items-start gap-3 transition-all duration-300"
                  >
                    <span className="text-gold-400 flex-shrink-0 mt-0.5">🏅</span>
                    <span className="font-sans text-xs text-mystic-200 leading-snug">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
