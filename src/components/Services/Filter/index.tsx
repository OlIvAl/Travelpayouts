import * as React from 'react';
import classnames from 'classnames';
import filterStyles from './Filter.module.css';

interface IProps {
  className: string;
}

const Filter: React.FC<IProps> = ({className}): JSX.Element => (
  <div className={classnames(className, filterStyles.container)}>
    <label className={filterStyles.label}>Фильтр</label>
    <input type="text" className={filterStyles.promoInput}/>
    <button className={filterStyles.btn}>Сбросить</button>
  </div>
);

export default Filter;