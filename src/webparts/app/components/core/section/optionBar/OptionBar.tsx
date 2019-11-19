import * as React from 'react';
import style from './OptionBar.module.scss';

export interface IOptionBarProps {}

export const OptionBar: React.FC<IOptionBarProps> = props => {
  return <div className={style.optionBar}>{props.children}</div>;
};
