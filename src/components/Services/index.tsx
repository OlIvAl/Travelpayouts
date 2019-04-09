import * as React from 'react';
import Header from './Header';
import Filter from './Filter';
import ListItem from './ListItem';

import styles from './Services.module.css';
import {IBonuse, IData} from '../../interfaces';
import {Currencies} from '../../enums';
import {useTranslation} from 'react-i18next';

const Services: React.FC = (): JSX.Element => {
  const [
    data,
    setData
  ] = React.useState<IData>({
    bonuses: [],
    header: {
      balance: 0,
      next_payout: 0,
      currency: Currencies.RUB
    }
  });

  React.useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      const result: Response = await fetch('/mock/data.json');

      const data: IData = await result.json();

      setData(data);
    };

    fetchData();
  }, []);

  const [
    filterString,
    setFilterString
  ] = React.useState<string>('');

  const {
    bonuses,
    header
  } = data;

  const filteredBonuses: IBonuse[] = React.useMemo<IBonuse[]>(
      () => bonuses.filter((item: IBonuse): boolean => (
        item.title.toLocaleLowerCase().includes(filterString.toLocaleLowerCase())
      )
    ), [filterString, bonuses]);

  const { t, i18n } = useTranslation();

  return (
    <>
      <Header
        balance={header.balance}
        next_payout={header.next_payout}
        currency={header.currency}
      />

      <div className={styles.container}>
        <h1>{t('services')}</h1>

        <Filter
          filterString={filterString}
          setFilterString={setFilterString}
          className={styles.filter}
        />

        <div className={styles.list}>
          {data.bonuses.length
            ? (
              filteredBonuses.map((item: IBonuse): JSX.Element => (
                <ListItem
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  promocode={item.promocode}
                />
              ))
            ) : null}
        </div>
      </div>
    </>
  );
};

export default Services;