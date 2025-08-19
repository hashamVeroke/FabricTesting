import { useEffect } from 'react';
import i18n from '../translations';
import type { ISouqAppProps } from '../types';

export default (props: ISouqAppProps) => {
  const { language } = props;
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return {};
};
