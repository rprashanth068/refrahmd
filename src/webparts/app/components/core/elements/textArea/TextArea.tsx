import * as React from "react";
import style from "./TextArea.module.scss";

export interface ITextAreaProps {
  height?: string;
  title: string;
  width?: string;
}

export const TextArea: React.FC<ITextAreaProps> = ({
  width,
  height,
  title
}) => {
  return (
    <div className={style.frmBlock}>
      <label>{title}</label>
      <textarea style={{ width: `${width}`, height: `${height}` }}></textarea>
    </div>
  );
};
