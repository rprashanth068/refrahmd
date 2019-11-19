import * as React from 'react';
import style from './Seprator.module.scss';

export interface ISepratorProps {}

export const Seprator: React.FC<ISepratorProps> = ({}) => {
  return <div className={style.seprator}></div>;
};
