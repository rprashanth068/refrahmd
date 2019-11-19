import * as React from 'react';
import style from './Space.module.scss';

export interface ISpaceProps {}

export const Space: React.FC<ISpaceProps> = ({}) => {
  return <div className={style.space}></div>;
};
