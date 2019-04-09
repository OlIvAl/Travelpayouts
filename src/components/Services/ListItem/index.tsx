import * as React from 'react';
import listItemStyles from './ListItem.module.css';
import copy from '../../../static/copy-icon.svg';
import {IBonuse} from '../../../interfaces';
import {useTranslation} from 'react-i18next';

function copyToClipboard(text: string): void {
  navigator.clipboard.writeText(text);
}

interface IProps extends IBonuse {

}

const ListItem: React.FC<IProps> = ({
  title,
  description,
  link,
  promocode
}): JSX.Element => {
  const { t, i18n } = useTranslation();

  return (
    <div className={listItemStyles.container}>
      <div className={listItemStyles.serviceDescr}>
        <a
          href={link}
          className={listItemStyles.title}
        >
          {title}
        </a>
        <div className={listItemStyles.description}>{description}</div>
      </div>
      <div className={listItemStyles.promoCode}>
        <label className={listItemStyles.label}>{t('promocode')}</label>
        <div className={listItemStyles.promoInput}>
          <input
            className={listItemStyles.promoInputInput}
            type="text"
            value={promocode}
          />
          <button
            onClick={copyToClipboard.bind(null, promocode)}
          >
            <img src={copy} alt=""/>
          </button>
        </div>
        <button
          className={listItemStyles.btn}
        >
          {t('get a bonus')}
        </button>
      </div>
    </div>
  );
};

export default ListItem;