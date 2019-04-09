import * as React from 'react';
import classnames from 'classnames';
import headerStyles from './Header.module.css';
import {IHeader} from '../../../interfaces';
import {Currencies} from '../../../enums';
import {useTranslation} from 'react-i18next';

interface IProps extends IHeader {
  className?: string;
}

const Header: React.FC<IProps> = ({
  balance,
  next_payout,
  currency,
  className = ''
}): JSX.Element => {
  const { t, i18n } = useTranslation();

  return (
    <div className={classnames(className, headerStyles.container)}>
      <dl className={headerStyles.list}>
        <dt className={headerStyles.title}>
          {t('balance')}
        </dt>
        <dd className={headerStyles.value}>
          {balance.toLocaleString(i18n.language)} {(currency === Currencies.RUB) ? '₽' : '$'}
        </dd>
      </dl>
      <dl className={headerStyles.list}>
        <dt className={headerStyles.title}>
          {t('to payoff')}
        </dt>
        <dd className={headerStyles.value}>
          {next_payout.toLocaleString(i18n.language)} {(currency === Currencies.RUB) ? '₽' : '$'}
        </dd>
      </dl>
    </div>
  );
};

export default Header;