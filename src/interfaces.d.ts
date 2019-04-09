import {Currencies} from './enums';

export interface IBonuse {
  title: string;
  description: string;
  link: string;
  promocode: string;
}

export interface IHeader {
  balance: number;
  next_payout: number;
  currency: Currencies;
}

export interface IData {
  bonuses: IBonuse[];
  header: IHeader;
}