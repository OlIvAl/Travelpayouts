import * as React from 'react';
import classnames from 'classnames';
import headerStyles from './Header.module.css';

interface IProps {
  className?: string;
}

const Header: React.FC<IProps> = ({className = ''}): JSX.Element => (
  <div className={classnames(className, headerStyles.container)}>
    <dl className={headerStyles.list}>
      <dt className={headerStyles.title}>Баланс</dt>
      <dd className={headerStyles.value}>213 920 ₽</dd>
    </dl>
    <dl className={headerStyles.list}>
      <dt className={headerStyles.title}>К выплате</dt>
      <dd className={headerStyles.value}>159 465 ₽</dd>
    </dl>
  </div>
);

export default Header;