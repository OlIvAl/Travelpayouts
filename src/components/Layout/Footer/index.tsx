import * as React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = (): JSX.Element => (
  <footer className={styles.container}>
    © Travelpayouts, 2011–2018
  </footer>
);

export default Footer;