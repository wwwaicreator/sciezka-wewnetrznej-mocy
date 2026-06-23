import { createContext, useContext, useState, type ReactNode } from 'react';
import { pl } from './pl';
import { en } from './en';
import type { Translations } from './pl';

export type Lang = 'pl' | 'en';

interface I18nContextType {
  lang: Lang;
  t: Translations;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'pl',
  t: pl,
  setLang: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('pl');
  const t = lang === 'pl' ? pl : en;

  return (
    <I18nContext.Provider value={{ lang, t, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
