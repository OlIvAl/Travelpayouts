import * as React from 'react';
import styles from './Layout.module.css';
import Nav from './Nav';
import Logo from './Logo';
import Footer from './Footer';

const Layout: React.FC = ({children}): JSX.Element => (
  <div className={styles.container}>
    <aside className={styles.aside}>
      <Logo />
      <Nav />
    </aside>

    <main>{children}</main>

    <Footer />
  </div>
);

export default Layout;