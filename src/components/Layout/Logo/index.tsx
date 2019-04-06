import * as React from 'react';
import logo from '../../../static/logo.svg';
import styles from './Logo.module.css';

const Logo: React.FC = (): JSX.Element => (
  <a href="#" className={styles.container}>
    <img src={logo} alt="Page logo"/>
  </a>
);

export default Logo;