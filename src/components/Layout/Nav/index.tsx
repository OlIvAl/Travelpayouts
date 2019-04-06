import * as React from 'react';
import classnames from 'classnames';
import styles from './Nav.module.css';

const Nav: React.FC = (): JSX.Element => (
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
      title='Отчеты'
    >
      Отчеты
    </a>
    <a
      href="#"
      className={styles.link}
      title='Статистика'
    >
      Статистика
    </a>
    <a
      href="#"
      className={styles.link}
      title='Офферы'
    >
      Офферы
    </a>
    <a
      href="#"
      className={styles.link}
      title='Инструменты'
    >
      Инструменты
    </a>
    <a
      href="#"
      className={styles.link}
      title='Разработчикам'
    >
      Разработчикам
    </a>
    <a
      href="#"
      className={classnames(styles.link, styles.activeLink)}
      title='Сервисы'
    >
      Сервисы
    </a>
    <a
      href="#"
      className={styles.link}
      title='Финансы'
    >
      Финансы
    </a>
  </nav>
);

export default Nav;