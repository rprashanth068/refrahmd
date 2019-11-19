// import * as React from 'react';
// import style from './Row.module.scss';

// export interface IRowProps {}

// export const Row: React.FC<IRowProps> = props => {
//   return <div className={style.row}>{props.children}</div>;
// };
import * as React from "react";
import stylee from "./Row.module.scss";

export const Row = props => {
  return (
    <div
      className={stylee.row}
      style={{
        alignItems: `${props.align}`,
        margin: `${props.margin}`,
        padding: `${props.padding}`
      }}
    >
      {props.children}
    </div>
  );
};
