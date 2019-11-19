import * as React from "react";
import style from "./DropDown.module.scss";

interface opt {
  value: string;
  text: string;
}

export interface IDropDownProps {
  height?: string;
  title: string;
  width?: string;
  options: opt[];
  selectWidth?: string;
}

export const DropDown: React.FC<IDropDownProps> = ({
  width,
  height,
  title,
  options,
  selectWidth
}) => {
  return (
    <div className={style.dropDown} style={{ width: `${width}` }}>
      <label>{title}</label>
      <select style={{ height: `${height}`, width: selectWidth }}>
        {options.map(op => {
          return (
            <option key={Math.random()} value={op.value}>
              {op.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};
