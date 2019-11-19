import * as React from "react";
import { CheckBox } from "../../index";
import style from "./Table.module.scss";

export interface ITableProps {
  height?: string;
  data: any;
  size: string;
  title: Array<string>;
}

export const Table: React.FC<ITableProps> = ({ data, size, height, title }) => {
  const customStyle = {
    gridTemplateColumns: "25px " + size
  };
  // Header Generator
  const header = title.map((title, i) => {
    return <li key={Math.random() * 10000}>{title}</li>;
  });

  //Body Generator
  const body = data.map(item => {
    return (
      <ul key={Math.random() * 10000} style={customStyle}>
        <li>
          <CheckBox />
        </li>
        {Object["values"](item).map(el => {
          return <li key={Math.random() * 10000}>{el}</li>;
        })}
      </ul>
    );
  });

  return (
    <div className={style.frmBlock}>
      <div className={style.table} style={{ height: height }}>
        <div className={style.header}>
          <ul style={customStyle}>
            <li>
              <CheckBox />
            </li>
            {header}
          </ul>
        </div>
        <div className={style.body}>{body}</div>
      </div>
    </div>
  );
};
