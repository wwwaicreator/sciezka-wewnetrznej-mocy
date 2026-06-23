import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '../i18n/I18nContext';

export default function Contact() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate send (mailto fallback)
    setTimeout(() => {
      const subject = encodeURIComponent('Zapytanie ze strony – Ścieżka Wewnętrznej Mocy');
      const body = encodeURIComponent(
        `Imię: ${form.name}\nE-mail: ${form.email}\nTelefon: ${form.phone}\n\n${form.message}`
      );
      window.location.href = `mailto:e.zdunska@op.pl?subject=${subject}&body=${body}`;
      setSending(false);
      setSent(true);
    }, 800);
  };

  const inputClass =
    'w-full glass rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-mystic-600 focus:outline-none focus:border-mystic-400 focus:ring-1 focus:ring-mystic-400/50 transition-all';

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0220]/80 to-transparent pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-mystic-400 mb-3 block">
            ✦ &nbsp; ✦ &nbsp; ✦
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-4">
            {t.contact.title}
          </h2>
          <div className="section-divider mb-6" />
          <p className="font-sans text-mystic-300 max-w-md mx-auto text-sm">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            {sent ? (
              <div className="glass rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">💫</div>
                <p className="font-serif text-xl text-white">{t.contact.sent}</p>
              </div>
            ) : (
              <>
                <input
                  className={inputClass}
                  placeholder={t.contact.namePlaceholder}
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  className={inputClass}
                  placeholder={t.contact.emailPlaceholder}
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                />
                <input
                  type="tel"
                  className={inputClass}
                  placeholder={t.contact.phonePlaceholder}
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                />
                <textarea
                  rows={5}
                  className={inputClass}
                  placeholder={t.contact.messagePlaceholder}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-gradient-to-r from-mystic-600 to-rose-600 hover:from-mystic-500 hover:to-rose-500 disabled:opacity-60 text-white py-3.5 rounded-xl font-sans font-semibold transition-all shadow-xl shadow-mystic-900/50 hover:scale-[1.02]"
                >
                  {sending ? t.contact.sending : t.contact.send}
                </button>
              </>
            )}
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Direct contact */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <p className="font-sans text-xs text-mystic-400 uppercase tracking-widest mb-4">
                {t.contact.or}
              </p>
              <a
                href={`mailto:${t.contact.email}`}
                className="flex items-center gap-3 group"
              >
                <span className="text-2xl">✉️</span>
                <span className="font-sans text-mystic-300 group-hover:text-white transition-colors">
                  {t.contact.email}
                </span>
              </a>
              <a
                href={`tel:+48${t.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 group"
              >
                <span className="text-2xl">📞</span>
                <span className="font-sans text-mystic-300 group-hover:text-white transition-colors">
                  {t.contact.phone}
                </span>
              </a>
            </div>

            {/* Photo decoration */}
            <div className="rounded-2xl overflow-hidden border border-mystic-700/30 shadow-xl relative">
              <img
                src="./images/bg3.jpg"
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118]/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="font-serif text-lg italic text-white/90">
                  Ewa Zduńska
                </p>
                <p className="font-sans text-xs text-mystic-300 tracking-widest">
                  Ścieżka Wewnętrznej Mocy
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
