import React, { useState } from 'react';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

export function Header() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  function handleChangeLang(lang) {
    changeLanguage(lang);
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logoRnters.jpg" alt="rnters logo"/>

        <nav>
          <a>{t('search')}</a>
          <a>{t('business')}</a>
          <a>{t('learnMore')}</a>
          <a>Login</a>
          <select className={styles.langSelect} onChange={(e) => handleChangeLang(e.target.value)}>
            <option value="pt">pt</option>
            <option value="en">en</option>
          </select>
        </nav>
      </div>
    </header>
  )
}