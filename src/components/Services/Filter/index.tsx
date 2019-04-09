import * as React from 'react';
import classnames from 'classnames';
import filterStyles from './Filter.module.css';
import {useTranslation} from 'react-i18next';

interface IProps {
  filterString: string;
  setFilterString: (str: string) => void;
  className: string;
}

const Filter: React.FC<IProps> = ({
  filterString,
  setFilterString,
  className
}): JSX.Element => {
  const { t, i18n } = useTranslation();

  return (
    <div className={classnames(className, filterStyles.container)}>
      <label className={filterStyles.label}>
        {t('filter')}
      </label>
      <input
        value={filterString}
        onChange={(e: any) => setFilterString(e.target.value)}
        className={filterStyles.promoInput}
      />
      <button
        onClick={setFilterString.bind(null, '')}
        className={filterStyles.btn}
      >
        {t('reset')}
      </button>
    </div>
  );
};

export default Filter;