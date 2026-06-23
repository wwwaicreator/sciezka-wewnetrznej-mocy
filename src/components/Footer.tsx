import { useI18n } from '../i18n/I18nContext';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative border-t border-mystic-900/50 py-10 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-2">
        <p className="font-serif text-lg text-shimmer">Ścieżka Wewnętrznej Mocy</p>
        <p className="font-sans text-xs text-mystic-500 tracking-wide">
          {t.footer.copy}
        </p>
        <p className="font-sans text-xs text-mystic-700">
          {t.footer.love}
        </p>
      </div>
    </footer>
  );
}
