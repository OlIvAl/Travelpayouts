import * as React from 'react';
import listItemStyles from './ListItem.module.css';
import copy from '../../../static/copy-icon.svg';

interface IProps {

}

const ListItem: React.FC<IProps> = (): JSX.Element => (
  <div className={listItemStyles.container}>
    <div className={listItemStyles.serviceDescr}>
      <div className={listItemStyles.title}>Nethouse</div>
      <div className={listItemStyles.description}>Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание </div>
    </div>
    <div className={listItemStyles.promoCode}>
      <label className={listItemStyles.label}>Промокод</label>
      <div className={listItemStyles.promoInput}>
        <input className={listItemStyles.promoInputInput} type="text" value={'Travelpayouts'}/>
        <button>
          <img src={copy} alt=""/>
        </button>
      </div>
      <button className={listItemStyles.btn}>Получить бонус</button>
    </div>
  </div>
);

export default ListItem;