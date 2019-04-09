import * as React from 'react';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';
import styles from './Nav.module.css';

const Nav: React.FC = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  return (
    <nav className={styles.container}>
      <a
        href="#"
        className={styles.link}
        title='Dashbord'
      >
        Dashbord
      </a>
      <a
        href="#"
        className={styles.link}
        title={t('reports')}
      >
        {t('reports')}
      </a>
      <a
        href="#"
        className={styles.link}
        title={t('statistics')}
      >
        {t('statistics')}
      </a>
      <a
        href="#"
        className={styles.link}
        title={t('offers')}
      >
        {t('offers')}
      </a>
      <a
        href="#"
        className={styles.link}
        title={t('instruments')}
      >
        {t('instruments')}
      </a>
      <a
        href="#"
        className={styles.link}
        title={t('for developers')}
      >
        {t('for developers')}
      </a>
      <a
        href="#"
        className={classnames(styles.link, styles.activeLink)}
        title={t('services')}
      >
        {t('services')}
      </a>
      <a
        href="#"
        className={styles.link}
        title={t('finance')}
      >
        {t('finance')}
      </a>
    </nav>
  )
};

export default Nav;