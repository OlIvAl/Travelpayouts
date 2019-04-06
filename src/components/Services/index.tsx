import * as React from 'react';
import Header from './Header';
import Filter from './Filter';
import ListItem from './ListItem';

import styles from './Services.module.css';

interface IProps {
  className: string;
}

const Services: React.FC = (): JSX.Element => (
  <>
    <Header />

    <div className={styles.container}>
      <h1>Сервисы</h1>

      <Filter className={styles.filter}/>

      <div className={styles.list}>
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  </>
);

export default Services;